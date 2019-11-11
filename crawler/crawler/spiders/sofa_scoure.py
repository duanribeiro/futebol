# -*- coding: utf-8 -*-
import scrapy
import json
import pandas as pd
from mongo_connection import db
from datetime import datetime
from scrapy.utils.response import open_in_browser




class sofa_scoure(scrapy.Spider):
    name = 'sofa_scoure'
    num = 1
    estatistic_data = []



    def start_requests(self):

        url = 'https://www.sofascore.com/api/v1/unique-tournament/325/season/22931/statistics?fields=goals%2C' \
                     'bigChancesMissed%2CsuccessfulDribbles%2CtotalShots%2CgoalConversionPercentage%2Crating&group=attack&' \
                     'accumulation=total&order=-rating&offset=0&limit=100&_=1573312147'

        yield scrapy.http.Request(url=url,
                                  method='GET',
                                  callback=self.parse)

    def parse(self, response):


        for i in range(len(json.loads(response.body_as_unicode())['results'])):
            sofa_scoure.estatistic_data.append({
                "name": json.loads(response.body_as_unicode())['results'][i]['player']['name'],
                "team": json.loads(response.body_as_unicode())['results'][i]['team']['slug'],
                "goals": int(json.loads(response.body_as_unicode())['results'][i]['goals']),
                "big_chances_missed": int(json.loads(response.body_as_unicode())['results'][i]['bigChancesMissed']),
                "success_ful_dribbles": int(json.loads(response.body_as_unicode())['results'][i]['successfulDribbles']),
                "total_shots": int(json.loads(response.body_as_unicode())['results'][i]['totalShots']),
                "goal_conversion_percentage": float(json.loads(response.body_as_unicode())['results'][i]['goalConversionPercentage']),
                "rating": float(json.loads(response.body_as_unicode())['results'][i]['rating'])

            })

        next_page = 'https://www.sofascore.com/api/v1/unique-tournament/325/season/22931/statistics?fields=goals%2C' \
                     'bigChancesMissed%2CsuccessfulDribbles%2CtotalShots%2CgoalConversionPercentage%2Crating&group=attack&' \
                     'accumulation=total&order=-rating&offset=' + str(sofa_scoure.num * 100) + '&limit=100&_=1573312147'
        if sofa_scoure.num < 8:

            sofa_scoure.num += 1
            yield response.follow(next_page, callback=self.parse)

        #db.sofa_scoure.insert_many(sofa_scoure.estatistic_data)









       


