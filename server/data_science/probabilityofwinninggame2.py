import pymongo
import pandas as pd
from datetime import datetime
from matplotlib import pyplot as plt

# Conectar ao Servidor
myclient = pymongo.MongoClient("mongodb+srv://duanribeiro:BJ183r32@futebol-iwbwh.mongodb.net/test?retryWrites=true&w=majority")

# Utilizar o banco de dados dentro do servidor
db = myclient["futebol"]
data = db.brazilian_league.find({'date': {'$gte': datetime(2019, 1, 1)}})
df = pd.DataFrame(data=data)
df = df.sort_values(by=['team_1', 'date']).reset_index()
df['winning_home'] = 0
df['winning_away'] = 0
df['new_column'] = 0

for index, row in df.iterrows():
    if row['score_team_1'] > row['score_team_2']:
        df.loc[index, 'winning_home'] = 1
    if row['score_team_1'] < row['score_team_2']:
        df.loc[index, 'winning_away'] = 1
pass
#plt.scatter(df.index, df.winning_home, marker='+', color='green')
#plt.show()
