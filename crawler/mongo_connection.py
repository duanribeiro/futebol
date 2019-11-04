import pymongo

client = pymongo.MongoClient('mongodb+srv://write_user:write_pass@futebol-iwbwh.mongodb.net/futebol&authSource=admin')

# db = client["futebol"]
db = client["playground"]