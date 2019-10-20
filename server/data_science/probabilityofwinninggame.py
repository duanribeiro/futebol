import pymongo
import pandas as pd
from datetime import datetime

# Conectar ao Servidor
myclient = pymongo.MongoClient("mongodb+srv://duanribeiro:BJ183r32@futebol-iwbwh.mongodb.net/test?retryWrites=true&w=majority")

# Utilizar o banco de dados dentro do servidor
db = myclient["futebol"]
data = db.brazilian_league.find({'date': {'$gte': datetime(2019, 1, 1)}})
df = pd.DataFrame(data=data)

# Criando Função de Probabilidade do Jogo
def probability(team_name):
    # Cria um novo dataframe apenas com o time de interesse
    new_df = df[df['team_1'] == team_name]

    # Coloca em ordem do mais antigo para o mais novo a tabela, de acordo com a data do jogo
    new_df = new_df.sort_values(by='date', ascending=False).reset_index()

    # Coletando os 3 últimos jogos
    wins = 0
    for i in range(3):

        if new_df['score_team_1'][i] > new_df['score_team_2'][i]:
            wins += 1

    p1 = 0.2 + 0.2 * wins
    pe = min(0.6 * p1, 0.16)
    p2 = 1 - p1 - pe

    p1 = round(p1 * 100, ndigits=6)
    pe = round(pe * 100, ndigits=6)
    p2 = round(p2 * 100, ndigits=6)

    return p1, pe, p2
