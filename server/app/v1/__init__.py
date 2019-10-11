from flask import Blueprint
from flask_restplus import Api

v1_blueprint = Blueprint('v1', __name__, url_prefix='/api/v1')

authorizations = {
    'Bearer Auth': {
        'type': 'apiKey',
        'in': 'header',
        'name': 'Authorization'
    },
}

api = Api(v1_blueprint,
          doc='/docs',
          title='Flask App',
          version='1.0',
          description='Flask RESTful API',
          security='Bearer Auth',
          authorizations=authorizations)

from .resources.brazilian_league.brazilian_league import api as brazilian_league

api.add_namespace(brazilian_league)
