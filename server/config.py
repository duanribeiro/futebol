from pymongo import MongoClient
import os
import logging
import sys
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)

def MongoDevConnection():
    try:
        MONGO_USER = os.environ['MONGO_USER']
        MONGO_PASS = os.environ['MONGO_PASS']
        MONGO_HOST = os.environ['MONGO_HOST']
        MONGO_DB = os.environ['MONGO_DB']
    except KeyError as key:
        logger.critical(f'{key} env var is missing !')
        sys.exit()

    client = MongoClient(f'mongodb+srv://{MONGO_USER}:{MONGO_PASS}@{MONGO_HOST}/{MONGO_DB}?retryWrites=true&w=majority')
    db = client["futebol"]

    return db


class DevelopConfig(object):
    try:
        PG_USER = os.environ['PG_USER']
        PG_PASS = os.environ['PG_PASS']
        PG_HOST = os.environ['PG_HOST']
        PG_PORT = os.environ['PG_PORT']
        PG_DB = os.environ['PG_DB']
    except KeyError as key:
        logger.critical(f'{key} env var is missing !')
        sys.exit()

    DEBUG = True
    SQLALCHEMY_DATABASE_URI = f'postgres://{PG_USER}:{PG_PASS}@{PG_HOST}:{PG_PORT}/{PG_DB}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False