from flask_restplus import Resource, Namespace
from .serializers import players
from .models import Players

api = Namespace('players', 'Players Endpoints')

@api.route('/top')
class TopPlayers(Resource):

    @api.marshal_list_with(players)
    def get(self):
        """
        Get top 12 market value players
        """
        return Players.top_players()


