from flask import Flask
from apis.main import mainpage
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    from models.model import db
    db.init_app(app)

    app.config.from_object('config.DevelopConfig')

    # Registrando blueprints
    app.register_blueprint(mainpage)
    with app.app_context():
        db.create_all()

    # Outras configs
    CORS(app)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(port='5000')
    #aaaaaaaaaaaaaaaaaaaaaa