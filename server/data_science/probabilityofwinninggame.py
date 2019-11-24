import pymongo
import pandas as pd
import numpy as np
from data_science.p_logit_home import probability_home
from data_science.p_logit_away import probability_away

# Conectar ao Servidor
myclient = pymongo.MongoClient(
    "mongodb+srv://write_user:write_pass@futebol-iwbwh.mongodb.net/test?retryWrites=true&w=majority")

# Utilizar o banco de dados dentro do servidor
db = myclient["futebol"]


# Criando Função de Probabilidade do Jogo
def probability(team_name_1, team_name_2):
    # Coletando os 5 últimos jogos do time da casa
    data = db.brazilian_league.find({'team_1': team_name_1, "score_team_1": {"$ne": "-"}}).sort('date', -1).limit(5)

    df_h = pd.DataFrame(data=data)

    for idx, row in df_h.iterrows():
        if row['score_team_1'] > row['score_team_2']:
            df_h.loc[idx, 'h'] = 1
        else:
            df_h.loc[idx, 'h'] = 0

    # Coletando os 5 últimos jogos do time da visitante
    data = db.brazilian_league.find({'team_2': team_name_2, "score_team_2": {"$ne": "-"}}).sort('date', -1).limit(5)

    df_a = pd.DataFrame(data=data)

    for idx, row in df_a.iterrows():
        if row['score_team_1'] < row['score_team_2']:
            df_a.loc[idx, 'a'] = 1
        else:
            df_a.loc[idx, 'a'] = 0

    ph = probability_home().dot(df_h['h'].to_frame())
    pa = probability_away().dot(df_a['a'].to_frame())
    p1 = round(ph.iloc[0, 0], ndigits=6)
    p2 = round(pa.iloc[0, 0], ndigits=6)
    pe = round(1 - p1 - p2, ndigits=6)

    return p1, pe, p2


print(probability('Palmeiras', 'Grêmio'))

pass
