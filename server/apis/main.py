from flask import Blueprint, jsonify, request
import pymongo
from config import MongoDevConnection

mainpage = Blueprint('mainpage', __name__)
db = MongoDevConnection()

@mainpage.route('/healthcheck', methods=['GET'])
def healthcheck():

    return jsonify({
        "message": "Success"
    }), 200


@mainpage.route('/', methods=['GET'])
def last_12_games():
    last_12_games = db.brazilian_league.find({},
                             {'_id': 0, 'stadium':1, 'team_1':1,
                              'team_2':1, 'score_team_1':1, 'score_team_2':1,
                              'date': 1}
                             ).sort('date', -1).limit(12)
    return jsonify({
        "message": "Success",
        "data": list(last_12_games)
    }), 200


@mainpage.route('/brazilian_league_graph', methods=['GET'])
def brazilian_league_graph():
    brazilian_league_graph = db.rank_brazilian_league.aggregate([
        {"$project": {'_id': 0, 'name': 1, 'points': '$2016.points'}}
    ])
    return jsonify({
        "message": "Success",
        "data": list(brazilian_league_graph)
    }), 200

#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
@mainpage.route('/top_players', methods=['GET'])
def top_players():
    top_players = db.players.find({}, {'_id': 0}).sort("market_value", -1).limit(12)

    return jsonify({
        "message": "Success",
        "data": list(top_players)
    }), 200