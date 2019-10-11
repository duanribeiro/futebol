import json
from app import mongo
from flask_restplus import abort
from bson.json_util import dumps
from bson.objectid import ObjectId
from app.helpers import encrypt_password
from datetime import datetime

class BrazilianLeague:

    def __init__(self):
        pass

    @staticmethod
    def last_12_games():

        query = mongo.db.brazilian_league.find({},
                             {'_id': 0, 'stadium':1, 'team_1':1,
                              'team_2':1, 'score_team_1':1, 'score_team_2':1,
                              'date': 1}
                             ).sort('date', -1).limit(12)

        final_object = []
        for result in query:
            result['date'] = datetime.strftime(result['date'], '%d/%m/%Y %H:%m')
            final_object.append(result)

        return json.loads(
            dumps(
                final_object
            )
        )


