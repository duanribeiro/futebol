from flask import Flask
from apis.main import mainpage
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    # Registrando blueprints
    app.register_blueprint(mainpage)

    # Outras configs
    CORS(app)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(port='5000')