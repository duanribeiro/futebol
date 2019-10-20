import pymongo
import pandas as pd

# Conectar ao Servidor
myclient = pymongo.MongoClient("mongodb+srv://duanribeiro:BJ183r32@futebol-iwbwh.mongodb.net/test?retryWrites=true&w=majority")

# Utilizar o banco de dados dentro do servidor
db = myclient["futebol"]
data = db.brazilian_league.find()
df = pd.DataFrame(data=data)
# print(df.head())

# Criando Buscador do último jogo do seu Time
def searching_last_game(team_name):

    # Cria um novo dataframe apenas com o time de interesse
    new_df = df[df['team_1'] == team_name]

    # Coloca em ordem do mais antigo para o mais novo a tabela, de acordo com a data do jogo
    new_df = new_df.sort_values(by='date', ascending=True)

    # Print do Resultado esperado
    print(f'Resultado: {str(new_df.iloc[-1, 1])} {str(new_df.iloc[-1, 9])} {str(new_df.iloc[-1, 4])} x {str(new_df.iloc[-1, 5])} {str(new_df.iloc[-1,10])}')

print(searching_last_game('Palmeiras'))
