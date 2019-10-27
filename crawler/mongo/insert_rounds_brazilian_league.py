from crawler.mongo_connection import db
from bson import ObjectId

games_without_round = list(
    db.brazilian_league.find({"round":{"$exists": False}}).sort("date", -1)
)

i = 0
round = 32
for game in games_without_round:
    if i == 10:
        i = 0
        round -= 1
    db.brazilian_league.update_one({"_id": ObjectId(game['_id'])}, {"$set": {"round": round}})
    i += 1

print("Fim")
