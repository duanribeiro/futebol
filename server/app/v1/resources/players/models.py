import json
from app import mongo
from flask_restplus import abort
from bson.json_util import dumps
from bson.objectid import ObjectId
from app.helpers import encrypt_password
from datetime import datetime

class Players:

    def __init__(self):
        pass

    @staticmethod
    def top_players():
        query = mongo.db.players.find({},
                             {'_id': 0, 'name':1, 'position':1,
                              'nationality':1, 'age':1, 'team':1,
                              'market_value': 1, 'stats': 1}
                             ).sort('market_value', -1).limit(12)


        return json.loads(
            dumps(query)
        )


