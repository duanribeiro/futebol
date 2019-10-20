from flask_restplus import Resource, Namespace
from .serializers import brazilian_league
from .models import BrazilianLeague
from server.data_science.probabilityofwinninggame import probability



api = Namespace('brazilian_league', 'Brazilian League Endpoints')

@api.route('/last_12_games')
class League(Resource):

    @api.marshal_list_with(brazilian_league)
    def get(self):
        """
        Get last 12 games
        """
        return BrazilianLeague.last_12_games()


@api.route('/brazilian_league_graph')
class RankLeague(Resource):

    def get(self):
        """
        Get brazilian league graph
        """


        return BrazilianLeague.brazilian_league_graph()


@api.route('/winning_probability')
class WinningProbability(Resource):

    def get(self):
        """
        Get team winning probability of next games
        """
        final_output = []
        for team in ['Chapecoense', 'Athletico Paranaense', 'Bahia', 'Botafogo']:

            p1, pe, p2 = probability(team)

            final_output.append({
                'team': team,
                'p1' : p1,
                'pe': pe,
                'p2': p2,
            })

        return final_output
