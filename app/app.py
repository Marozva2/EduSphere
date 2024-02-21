from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow

from models import db


from routes.auth import auth_bp, jwt
from routes.users_bp import user_bp, bcrypt
from routes.course_bp import course_bp


def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///edusphere.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)
    ma = Marshmallow(app)
    migrate = Migrate(app, db)

    app.register_blueprint(user_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(course_bp)

    CORS(app)
    return app
