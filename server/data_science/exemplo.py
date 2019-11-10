from app import mongo

import pandas as pd

all_games = list(
    mongo.db.brazilian_league.find({"score_team_1":{"$ne": "-"}},
                             {"_id": 0, "team_1": 1, "score_team_1": 1,
                              "score_team_2": 1, "round": 1}).sort("date", 1)
)

df = pd.DataFrame(all_games)
df['h'] = 0
df['h-1'] = 0

all_teams = mongo.db.brazilian_league.distinct("team_1")

for team in all_teams:
    team_df = df[df["team_1"] == team].reset_index()

    for idx, row in team_df.iterrows():
        if row['score_team_1'] > row['score_team_2']:
            team_df.loc[idx, 'h'] = 1
            team_df.loc[idx + 1, 'h-1'] = team_df.loc[idx, 'h']

print()
