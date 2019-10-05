import pandas as pd
import pymongo
from datetime import datetime, timedelta
from pprint import pprint
# Variáveis do MongoDB

myclient = pymongo.MongoClient("mongodb+srv://duanribeiro:BJ183r32@futebol-iwbwh.mongodb.net/test?retryWrites=true&w=majority")
mydb = myclient["futebol"]
mycollection = mydb["brazilian_league"]

# Constantes
PATH_FILE = r'C:\Users\duanr\Desktop\futebol\database\campeonato-brasileiro-full.xlsx'

# Crawler
df = pd.read_excel(PATH_FILE)
final_output = []
for idx, row  in df.iterrows():
    old_date = f'{row["Data"]} - {row["Horario"]}'

    if type(row['Horario']) == str:
        try:
            new_date = datetime.strptime(old_date, '%d/%m/%Y - %Hh%M')
        except:
            try:
                new_date = datetime.strptime(old_date, '%d/%m/%Y - %Hh')
            except:
                new_date = datetime.strptime(old_date, '%d/%m/%Y - %H:%M')
    else:
        new_date = 'undefined'

    try:
        new_record = {
            'stadium': row['Arena'],
            'state_team_1': row['C1 Estado'],
            'state_team_2': row['C2 Estado'],
            'team_1': row['Clube 1'],
            'team_2': row['Clube 2'],
            'date': new_date,
            'day_of_week': row['Dia'],
            'round': row['Rodada'],
            'winner': row['Vencedor'],
            'score_team_1': row['p1'],
            'score_team_2': row['p2']
        }
        final_output.append(new_record)
        print(new_record['team_1'])

    except Exception as ex:
        print(ex)

mycollection.insert_many(final_output)
