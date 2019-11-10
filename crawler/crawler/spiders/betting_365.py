# -*- coding: utf-8 -*-
import scrapy
from scrapy.utils.response import open_in_browser
from mongo_connection import db
import requests

class Betting365(scrapy.Spider):
    name = 'betting_365'

    def start_requests(self):
        for page in range(1, 4):
            url = f'https://www.bet365.com/#/AC/B1/C1/D13/E42466419/F2/'

            yield scrapy.http.Request(url=url,
                                      method='GET',
                                      callback=self.parse)

    def parse(self, response):
        final_output = []
        table_body = response.css('tbody')[1]





