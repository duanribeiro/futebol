from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class PostProcessing(db.Model):
    __tablename__ = 'newtable2'

    id = db.Column(db.BigInteger, primary_key=True)
    track_name = db.Column(db.String(200))
    n_citacoes = db.Column(db.BigInteger)
    size_bytes = db.Column(db.BigInteger)
    price = db.Column(db.Float)
    prime_genre = db.Column(db.String(50))