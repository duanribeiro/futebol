from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class BrazilianLeague(db.Model):
    __tablename__ = 'brazilian_league'

    #Criar Colunas primeiro para depois inserir dados
    id = db.Column(db.BigInteger,primary_key=True)
    stadium = db.Column(db.String(100))
    state_team_home = db.Column(db.String(2))
    state_team_away = db.Column(db.String(2))
    team_home = db.Column(db.String(50))
    team_away = db.Column(db.String(50))
    date = db.Column(db.DateTime())
    day_week = db.Column(db.String(20))
    round = db.Column(db.Integer)
    winner = db.Column(db.String(50))
    score_team_home = db.Column(db.Integer)
    score_team_away = db.Column(db.Integer)

    # id = db.Column(db.BigInteger, primary_key=True)
    # track_name = db.Column(db.String(200))
    # n_citacoes = db.Column(db.BigInteger)
    # size_bytes = db.Column(db.BigInteger)
    # price = db.Column(db.Float)
    # prime_genre = db.Column(db.String(50))

