import pymongo
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Conectar ao Servidor
myclient = pymongo.MongoClient("mongodb+srv://write_user:write_pass@futebol-iwbwh.mongodb.net/test?retryWrites=true&w=majority")

# Utilizar o banco de dados dentro do servidor
db = myclient["futebol"]

def probability_home():

    all_games = list(
        db.brazilian_league.find({"score_team_1": {"$ne": "-"}},
                                 {"_id": 0, "team_1": 1, "score_team_1": 1,
                                  "score_team_2": 1, "round": 1}).sort("date", 1)
    )

    df = pd.DataFrame(all_games)

    all_teams = db.brazilian_league.distinct("team_1")

    final_df = pd.DataFrame()

    for team in all_teams:
        team_df = df[df["team_1"] == team].reset_index()

        for idx, row in team_df.iterrows():
            if row['score_team_1'] > row['score_team_2']:
                team_df.loc[idx, 'h'] = 1
            else:
                team_df.loc[idx, 'h'] = 0
            team_df.loc[idx + 1, 'h-1'] = team_df.loc[idx, 'h']
            team_df.loc[idx + 2, 'h-2'] = team_df.loc[idx + 1, 'h-1']
            team_df.loc[idx + 3, 'h-3'] = team_df.loc[idx + 2, 'h-2']
            team_df.loc[idx + 4, 'h-4'] = team_df.loc[idx + 3, 'h-3']
            team_df.loc[idx + 5, 'h-5'] = team_df.loc[idx + 4, 'h-4']

        final_df = pd.concat([final_df, team_df], ignore_index=True)

    final_df = final_df.dropna().drop(columns=['round', 'score_team_1', 'score_team_2', 'team_1']).reset_index()

    X_train, X_test, y_train, y_test = train_test_split(final_df[['h-1', 'h-2', 'h-3', 'h-4', 'h-5']], final_df.h, test_size=0.1, random_state=1)

    model = LogisticRegression(random_state=1)

    model.fit(X_train, y_train)

    model.predict(X_test)

    model.score(X_test, y_test)

    return pd.DataFrame(model.coef_)
