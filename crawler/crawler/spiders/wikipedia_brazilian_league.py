# -*- coding: utf-8 -*-
import scrapy
from mongo_connection import db
from datetime import datetime

def convert_date(string_date):
    brazilian_months = {
        'janeiro': 1,
        'fevereiro': 2,
        'março': 3,
        'abril': 4,
        'maio': 5,
        'junho': 6,
        'julho': 7,
        'agosto': 8,
        'setembro': 9,
        'outubro': 10,
        'novembro': 11,
        'dezembro': 12,

    }
    day = int(string_date.split(' ')[0])
    month = brazilian_months[string_date.split(' ')[2]]
    year = datetime.now().year

    return datetime(year, month, day)


class WikipediaBrazilianLeagueFirstPhase(scrapy.Spider):
    name = 'wikipedia_brazilian_league_first_phase'

    def start_requests(self):
        url = 'https://pt.wikipedia.org/wiki/' \
              'Resultados_do_primeiro_turno_do_Campeonato_Brasileiro_de_Futebol_de_2019_-_S%C3%A9rie_A'

        yield scrapy.http.Request(url=url,
                                  method='GET',
                                  callback=self.parse)

    def parse(self, response):
        final_result = []

        for table in range(3, 192):
            basic_info = response.xpath(f'//*[@id="mw-content-text"]/div/table[{table}]').css('tbody').css('tr')[0]\
                .css('td')

            # Caso não exista placar, vamos pular
            if basic_info[2].css('b').get() == '<b>–</b>':
                continue

            date = convert_date(string_date=basic_info[0].css('a').attrib['title'])
            team_1 =  basic_info[1].css('a').get().split('>')[1].split('<')[0]
            team_2 =  basic_info[3].css('a')[1].get().split('>')[1].split('<')[0]
            score_team_1 = int(basic_info[2].css('b').get().split(' – ')[0][-1])
            score_team_2 = int(basic_info[2].css('b').get().split(' – ')[1][0])

            # Verificando o que já existe no banco de dados
            if db.brazilian_league.find_one({"team_1": team_1, "team_2": team_2, "date": date}):
                continue

            if score_team_1 > score_team_2:
                winner = team_1
            elif score_team_1 < score_team_2:
                winner = team_1
            else:
                winner = '-'

            process = {
                "stadium": basic_info[4].css('a').attrib['title'].split('Estádio ')[-1],
                "state_team_1": basic_info[1].css('img').attrib['alt'],
                "state_team_2": basic_info[3].css('img').attrib['alt'],
                "team_1": team_1,
                "team_2": team_2,
                "date": date,
                "winner": winner,
                "score_team_1": score_team_1,
                "score_team_2": score_team_2,
            }
            final_result.append(process)

        # Inserindo no banco de dados
        db.brazilian_league.insert_many(final_result)


class WikipediaBrazilianLeagueSecondPhase(scrapy.Spider):
    name = 'wikipedia_brazilian_league_second_phase'

    def start_requests(self):
        url = f'https://pt.wikipedia.org/wiki/' \
              f'Resultados_do_segundo_turno_do_Campeonato_Brasileiro_de_Futebol_de_2019_-_S%C3%A9rie_A'

        yield scrapy.http.Request(url=url,
                                  method='GET',
                                  callback=self.parse)

    def parse(self, response):
        final_result = []
        for table in range(3, 193):
            basic_info = response.xpath(f'//*[@id="mw-content-text"]/div/table[{table}]').css('tbody').css('tr')[0]\
                .css('td')

            # Caso não exista placar, vamos pular
            if basic_info[2].css('b').get() == '<b>–</b>':
                score_team_1 = '-'
                score_team_2 = '-'
            else:
                score_team_1 = int(basic_info[2].css('b').get().split(' – ')[0][-1])
                score_team_2 = int(basic_info[2].css('b').get().split(' – ')[1][0])

            try:
                date = convert_date(string_date=basic_info[0].css('a').attrib['title'])
            except:
                date = '-'

            try:
                stadium = basic_info[4].css('a').attrib['title'].split('Estádio ')[-1]
            except:
                stadium = '-'

            team_1 = basic_info[1].css('a').get().split('>')[1].split('<')[0]
            team_2 = basic_info[3].css('a')[1].get().split('>')[1].split('<')[0]


            # Verificando o que já existe no banco de dados
            game = db.brazilian_league.find_one({"team_1": team_1, "team_2": team_2, "date": date})
            if game and game['score_team_1'] != '-':
                continue
            elif game and game['score_team_1'] == '-':
                db.brazilian_league.remove({'_id': game['_id']})

            if score_team_1 > score_team_2:
                winner = team_1
            elif score_team_1 < score_team_2:
                winner = team_1
            else:
                winner = '-'

            process = {
                "stadium": stadium,
                "state_team_1": basic_info[1].css('img').attrib['alt'],
                "state_team_2": basic_info[3].css('img').attrib['alt'],
                "team_1": team_1,
                "team_2": team_2,
                "date": date,
                "winner": winner,
                "score_team_1": score_team_1,
                "score_team_2": score_team_2,
            }
            final_result.append(process)

        # Inserindo no banco de dados
        db.brazilian_league.insert_many(final_result)

