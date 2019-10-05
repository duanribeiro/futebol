import pymongo

def MongoDevConnection():
    client = pymongo.MongoClient("mongodb+srv://duanribeiro:BJ183r32@futebol-iwbwh.mongodb.net/test?retryWrites=true&w=majority")
    db = client["futebol"]

    return db

