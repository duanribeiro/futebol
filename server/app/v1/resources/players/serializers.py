from app.v1 import api
from flask_restplus import fields

players = api.model('Players', {
    'id': fields.String(readonly=True, description='User ID', attribute='_id.$oid'),
    'name': fields.String(required=True, description='Player name'),
    'position': fields.String(description='Player position'),
    'nationality': fields.String(description='Player nationality'),
    'age': fields.Integer(required=True, description='Player age'),
    'team': fields.String(required=True, description='Player Team'),
    'market_value': fields.Float(description='Player market value'),
})
