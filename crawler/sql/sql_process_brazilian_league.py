import pandas as pd
from datetime import datetime, timedelta, date
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from crawler.env import PG_USER, PG_PASS, PG_HOST, PG_PORT, PG_DB


engine = create_engine(f'postgres://{PG_USER}:{PG_PASS}@{PG_HOST}:{PG_PORT}/{PG_DB}')
conn = engine.connect()
Session = sessionmaker(bind=engine)
session = Session()

# Process
rounds = {}
teams = {}
last_year = session.query(brazilian_league).all()

last_year = list(db.brazilian_league.find({}, {"_id":0, "date":1}).sort("date",-1).limit(1))[0]['date'].year
for year in range(2014, last_year):
    print(f' ANO: {year}')
    anual_games = list(db.brazilian_league.aggregate([
        {"$match": {
            "date": {"$gte": datetime(year, 1, 1), "$lte": datetime(year + 1, 1, 1)}
        }},
        {"$project": {
            "_id": 0, "stadium": 0, "state_team_1": 0 , "state_team_2": 0, "day_of_week": 0,
            "winner": 0
        }},
        {"$sort": {"round": 1}}
    ]))

    # Jogos separados por rodadas
    df = pd.DataFrame(anual_games)
    for round in range(int(df['round'].max()) + 1):
        for idx, game in df[df['round'] == round].iterrows():

            # Caso os dicionários não existam
            if game['team_1'] not in teams.keys():
                teams[game['team_1']] = {}
            if game['team_2'] not in teams.keys():
                teams[game['team_2']] = {}
            if str(year) not in teams[game['team_1']].keys():
                teams[game['team_1']][str(year)] = {'points': [0]}
            if str(year) not in teams[game['team_2']].keys():
                teams[game['team_2']][str(year)] = {'points': [0]}

            # Acumulando
            cumulative_points_team_1 = teams[game['team_1']][str(year)]['points'][-1]
            cumulative_points_team_2 = teams[game['team_2']][str(year)]['points'][-1]

            if game['score_team_1'] > game['score_team_2']:
                teams[game['team_1']][str(year)]['points'].append(cumulative_points_team_1 + 3)
                teams[game['team_2']][str(year)]['points'].append(cumulative_points_team_2)
            elif game['score_team_1'] == game['score_team_2']:
                teams[game['team_1']][str(year)]['points'].append(cumulative_points_team_1 + 1)
                teams[game['team_2']][str(year)]['points'].append(cumulative_points_team_2 + 1)
            else:
                teams[game['team_1']][str(year)]['points'].append(cumulative_points_team_1)
                teams[game['team_2']][str(year)]['points'].append(cumulative_points_team_2 + 3)

for team in teams.keys():
    teams[team]['name'] = team
    collection.insert_one(teams[team])
print(f'FIM!')


