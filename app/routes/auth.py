from flask import Blueprint
from flask_bcrypt import Bcrypt
from flask_restful import Api, Resource, abort, reqparse
from flask_jwt_extended import create_access_token, JWTManager

from models import User, db

auth_bp = Blueprint('auth_bp', __name__)
bcrypt = Bcrypt()
jwt = JWTManager()
api = Api(auth_bp)




login_args = reqparse.RequestParser()
login_args.add_argument('email', type=str, required=True)
login_args.add_argument("username", type=str, required=True)
login_args.add_argument("password", type=str, required=True)



class Login(Resource):
    def post(self):
        data = login_args.parse_args()
        user = User.query.filter_by(email=data['email']).first()

        if not user:
            return abort(404, detail="User does not exist")

        if not bcrypt.check_password_hash(user.password, data['password']):
            return abort(403, detail="Incorrect password")
        token = create_access_token(identity=user.id)
        return {"access_token": token, "user_id": user.id, "username": user.username, "role": user.role, "created_at": user.created_at, "updated_at": user.updated_at}


api.add_resource(Login, '/login')
