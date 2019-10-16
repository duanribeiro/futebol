from app.v1 import api
from flask_restplus import fields

brazilian_league = api.model('BrazilianLeague', {
    'id': fields.String(readonly=True, description='User ID', attribute='_id.$oid'),
    'stadium': fields.String(required=True, description='The stadium game'),
    'state_team_1': fields.String(required=True, description='State of home team.'),
    'state_team_2': fields.String(required=True, description='State of away team.'),
    'team_1': fields.String(required=True, description='Home team name'),
    'team_2': fields.String(required=True, description='Away team name'),
    'date': fields.String(required=True, description='Datetime of the game'),
    'day_of_week': fields.String(description='Day of week'),
    'round': fields.Integer(required=True, description='Round'),
    'winner': fields.String(required=True, description='Winner name'),
    'score_team_1': fields.Integer(required=True, description='Score home team'),
    'score_team_2': fields.Integer(required=True, description='Score away team'),
})


# create_user = api.inherit('User Creation', user, {
#     'password': fields.String(required=True, description='User Password'),
# })
