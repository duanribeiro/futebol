from flask_restplus import Resource, Namespace
from .serializers import brazilian_league
from .models import BrazilianLeague

api = Namespace('brazilian_league', 'Brazilian League Endpoints')


@api.route('/')
class League(Resource):

    @api.marshal_list_with(brazilian_league)
    def get(self):
        """
        Get last 12 games
        """
        return BrazilianLeague.last_12_games()



