# -*- coding: utf-8 -*-
import scrapy
from scrapy.utils.response import open_in_browser
from config import MongoDevConnection
import requests

db = MongoDevConnection()

euro_value = requests.get('https://economia.awesomeapi.com.br/all/EUR-BRL')
euro_value = float(euro_value.content.decode().split('"high":')[1].split('"')[1].replace(',','.'))

class TransfermakertBrazilSpider(scrapy.Spider):
    name = 'transfermakert_brazil'

    def start_requests(self):
        for page in range(1, 4):
            url = f'https://www.transfermarkt.com.br/campeonato-brasileiro-serie-a/marktwerte/wettbewerb/BRA1/ajax/yw1/page/{page}?ajax=yw1'


            yield scrapy.http.Request(url=url,
                                      method='GET',
                                      callback=self.parse)

    def parse(self, response):
        final_output = []
        table_body = response.css('tbody')[1]
        for row in table_body.css('tr'):
            try:
                final_output.append({
                    "name":  row.css('a').attrib['title'],
                    "position": row.css('td')[4].get().replace('<td>', '').replace('</td>', ''),
                    "nationality": row.css('img')[1].attrib['title'],
                    "age": int(row.css('td')[6].get().split('>')[1].split('<')[0]),
                    "team": row.css('a').css('img')[0].attrib['alt'],
                    "market_value": round(
                        float(row.css('span')[0].get().split('>')[1].split('<')[0].split(' ')[0].replace(',', '.')) * euro_value
                    )
                })
            except:
                pass
        db.players.insert_many(final_output)




