# -*- coding: utf-8 -*-
import scrapy
from mongo_connection import db
from datetime import datetime
from scrapy.utils.response import open_in_browser
import pandas as pd


class ScoutCartolaFc(scrapy.Spider):
    name = 'scout_cartola_fc'

    def start_requests(self):
        url = 'https://www.cartolafcbrasil.com.br/scouts'

        yield scrapy.http.Request(url=url,
                                  method='GET',
                                  callback=self.parse)

    def parse(self, response):
        final_output = []
        main_table = response.xpath('//*[@id="ctl00_cphMainContent_gvList"]')[0]

        for row in main_table.css("tr")[1:31]:
            final_output.append({
                "name": row.css('a').attrib['title'].split('-')[0].strip(),
                "team": row.css('a').attrib['title'].split('-')[1].strip(),
                "price": float(row.css('td')[2].get().split(">")[1].split("<")[0].replace(",", ".")),
                "games": int(row.css('td')[3].get().split(">")[1].split("<")[0]) if row.css('td')[3].get().split(">")[1].split("<")[0] != ' ' else None,
                "stollen_balls": int(row.css('td')[7].get().split(">")[1].split("<")[0]) if row.css('td')[7].get().split(">")[1].split("<")[0] != ' ' else None,
                "goals": int(row.css('td')[8].get().split(">")[1].split("<")[0]) if row.css('td')[8].get().split(">")[1].split("<")[0] != ' ' else None,
                "assistance": int(row.css('td')[9].get().split(">")[1].split("<")[0]) if row.css('td')[9].get().split(">")[1].split("<")[0] != ' ' else None,
                "goal_free_games": int(row.css('td')[10].get().split(">")[1].split("<")[0]) if row.css('td')[10].get().split(">")[1].split("<")[0] != ' ' else None,
                "suffered_fault": int(row.css('td')[11].get().split(">")[1].split("<")[0]) if row.css('td')[11].get().split(">")[1].split("<")[0] != ' ' else None,
                "finishing_out": int(row.css('td')[12].get().split(">")[1].split("<")[0]) if row.css('td')[12].get().split(">")[1].split("<")[0] != ' ' else None,
                "finishing_defend": int(row.css('td')[13].get().split(">")[1].split("<")[0]) if row.css('td')[13].get().split(">")[1].split("<")[0] != ' ' else None,
                "finishing_beam": int(row.css('td')[14].get().split(">")[1].split("<")[0]) if row.css('td')[14].get().split(">")[1].split("<")[0] != ' ' else None,
                "hard_defense": int(row.css('td')[15].get().split(">")[1].split("<")[0]) if row.css('td')[15].get().split(">")[1].split("<")[0] != ' ' else None,
                "penalty_defense": int(row.css('td')[16].get().split(">")[1].split("<")[0]) if row.css('td')[16].get().split(">")[1].split("<")[0] != ' ' else None,
                "goal_against": int(row.css('td')[17].get().split(">")[1].split("<")[0]) if row.css('td')[17].get().split(">")[1].split("<")[0] != ' ' else None,
                "red_cards": int(row.css('td')[18].get().split(">")[1].split("<")[0]) if row.css('td')[18].get().split(">")[1].split("<")[0] != ' ' else '',
                "yellow_cards": int(row.css('td')[19].get().split(">")[1].split("<")[0]) if row.css('td')[19].get().split(">")[1].split("<")[0] != ' ' else '',
                "goal_conceded": int(row.css('td')[20].get().split(">")[1].split("<")[0]) if row.css('td')[20].get().split(">")[1].split("<")[0] != ' ' else '',
                "penalty_missed": int(row.css('td')[21].get().split(">")[1].split("<")[0]) if row.css('td')[21].get().split(">")[1].split("<")[0] != ' ' else '',
                "foul_committed": int(row.css('td')[22].get().split(">")[1].split("<")[0]) if row.css('td')[22].get().split(">")[1].split("<")[0] != ' ' else '',
                "off-side": int(row.css('td')[23].get().split(">")[1].split("<")[0]) if row.css('td')[23].get().split(">")[1].split("<")[0] != ' ' else '',
                "wrong_pass": int(row.css('td')[24].get().split(">")[1].split("<")[0]) if row.css('td')[24].get().split(">")[1].split("<")[0] != ' ' else ''
            })

        db.scout_cartola_fc.insert_many(final_output)
