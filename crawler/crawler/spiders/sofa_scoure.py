# -*- coding: utf-8 -*-
import scrapy
import json
import pandas as pd
#from mongo_connection import db
#from datetime import datetime
#from scrapy.utils.response import open_in_browser




class sofa_scoure(scrapy.Spider):
    name = 'sofa_scoure'
    num = 1
    num2 = 1
    num3 = 1
    estatistic_data_attack = []
    estatistic_data_deffence = []
    estatistic_data_passing = []



    def start_requests(self):

        url_attack = 'https://www.sofascore.com/api/v1/unique-tournament/325/season/22931/statistics?fields=goals%2C' \
                     'bigChancesMissed%2CsuccessfulDribbles%2CtotalShots%2CgoalConversionPercentage%2Crating&group=attack&' \
                     'accumulation=total&order=-rating&offset=0&limit=100&_=1573312147'

        url_deffence = 'https://www.sofascore.com/api/v1/unique-tournament/325/season/22931/statistics?fields=tackles%2C' \
                     'interceptions%2Cclearances%2CerrorLeadToGoal%2CblockedShots%2Crating&group=defence&accumulation=total&' \
                     'order=-rating&offset=0&limit=100&_=1573522360'

        url_passing = 'https://www.sofascore.com/api/v1/unique-tournament/325/season/22931/statistics?fields=bigChancesCreated%2C' \
                      'assists%2CaccuratePasses%2CaccuratePassesPercentage%2CkeyPasses%2Crating&group=passing&accumulation=total&' \
                      'order=-rating&offset=0&limit=100&_=1573590527'



        yield scrapy.http.Request(url=url_attack,
                                  method='GET',
                                  callback=self.parse)

        yield scrapy.http.Request(url=url_deffence,
                                  method='GET',
                                  callback=self.parse_deffence)

        yield scrapy.http.Request(url=url_passing,
                                  method='GET',
                                  callback=self.parse_passing)





    def parse(self, response):


        for i in range(len(json.loads(response.body_as_unicode())['results'])):
            sofa_scoure.estatistic_data_attack.append({
                "name": json.loads(response.body_as_unicode())['results'][i]['player']['name'],
                "team": json.loads(response.body_as_unicode())['results'][i]['team']['slug'],
                "goals": int(json.loads(response.body_as_unicode())['results'][i]['goals']),
                "big_chances_missed": int(json.loads(response.body_as_unicode())['results'][i]['bigChancesMissed']),
                "success_ful_dribbles": int(json.loads(response.body_as_unicode())['results'][i]['successfulDribbles']),
                "total_shots": int(json.loads(response.body_as_unicode())['results'][i]['totalShots']),
                "goal_conversion_percentage": float(json.loads(response.body_as_unicode())['results'][i]['goalConversionPercentage'])

            })

        next_page = 'https://www.sofascore.com/api/v1/unique-tournament/325/season/22931/statistics?fields=goals%2C' \
                     'bigChancesMissed%2CsuccessfulDribbles%2CtotalShots%2CgoalConversionPercentage%2Crating&group=attack&' \
                     'accumulation=total&order=-rating&offset=' + str(sofa_scoure.num * 100) + '&limit=100&_=1573312147'
        if sofa_scoure.num < 8:

            sofa_scoure.num += 1
            yield response.follow(next_page, callback=self.parse)

        else:
            #db.statistic_players.insert_many(sofa_scoure.estatistic_data)
            data_attack = pd.DataFrame(sofa_scoure.estatistic_data_attack)







    def parse_deffence(self, response):


        for i in range(len(json.loads(response.body_as_unicode())['results'])):
            sofa_scoure.estatistic_data_deffence.append({
                "tackles": int(json.loads(response.body_as_unicode())['results'][i]['tackles']),
                "interceptions": int(json.loads(response.body_as_unicode())['results'][i]['interceptions']),
                "clearances": int(json.loads(response.body_as_unicode())['results'][i]['clearances']),
                "error_lead_to_goal": int(json.loads(response.body_as_unicode())['results'][i]['errorLeadToGoal']),
                "blocked_shots": int(json.loads(response.body_as_unicode())['results'][i]['blockedShots'])

            })




        next_page2 = 'https://www.sofascore.com/api/v1/unique-tournament/325/season/22931/statistics?fields=tackles%2C' \
                     'interceptions%2Cclearances%2CerrorLeadToGoal%2CblockedShots%2Crating&group=defence&accumulation=total&' \
                     'order=-rating&offset=' + str(sofa_scoure.num2 * 100) + '&limit=100&_=1573522360'

        if sofa_scoure.num2 < 8:

            sofa_scoure.num2 += 1
            print(sofa_scoure.num2)
            yield response.follow(next_page2, callback=self.parse_deffence)





    def parse_passing(self, response):


        for i in range(len(json.loads(response.body_as_unicode())['results'])):
            sofa_scoure.estatistic_data_passing.append({
                "bigChancesCreated": int(json.loads(response.body_as_unicode())['results'][i]['bigChancesCreated']),
                "assists": int(json.loads(response.body_as_unicode())['results'][i]['assists']),
                "accuratePasses": int(json.loads(response.body_as_unicode())['results'][i]['accuratePasses']),
                "accuratePassesPercentage": int(json.loads(response.body_as_unicode())['results'][i]['accuratePassesPercentage']),
                "keyPasses": int(json.loads(response.body_as_unicode())['results'][i]['keyPasses']),
                "rating": float(json.loads(response.body_as_unicode())['results'][i]['rating'])

            })




        next_page3 = 'https://www.sofascore.com/api/v1/unique-tournament/325/season/22931/statistics?fields=bigChancesCreated%2C' \
                      'assists%2CaccuratePasses%2CaccuratePassesPercentage%2CkeyPasses%2Crating&group=passing&accumulation=total&' \
                      'order=-rating&offset=' + str(sofa_scoure.num3 * 100) + '&limit=100&_=1573590527'

        if sofa_scoure.num3 < 8:

            sofa_scoure.num3 += 1
            print(sofa_scoure.num3)
            yield response.follow(next_page3, callback=self.parse_passing)







