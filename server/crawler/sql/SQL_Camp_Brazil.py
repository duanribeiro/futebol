# Importar o pandas para abrir o Excel
import pandas as pd

from models.model import db

# vamos chamar uma funcao do pandas para ler o arquivo
df = pd.read_excel(io=r'C:\Users\macha\PycharmProjects\futebol\database\campeonato-brasileiro-full.xlsx')
pass