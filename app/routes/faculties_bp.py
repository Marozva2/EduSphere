from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow
from datetime import datetime

from models import Faculty, db
# from serializers import FacultySchema

faculties_bp = Blueprint('faculties_bp', __name__)
ma = Marshmallow(faculties_bp)
api = Api(faculties_bp)


# Request parsers to handle incoming data
post_args = reqparse.RequestParser()
post_args.add_argument('name', type=str, required=True, help='Name is required here')
post_args.add_argument('email', type=str, required=True, help='Email is required')
post_args.add_argument('department_id', type=str, required=True, help='Department ID is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('name', type=str)
patch_args.add_argument('email', type=str)
patch_args.add_argument('department_id', type=str)


# Initialize the FacultySchema for serialization
facultyschema = FacultySchema(many=True)
facultyschema_single = FacultySchema()



class Faculties(Resource):
    def get(self):
        faculties = Faculty.query.all()
        result = facultyschema.dump(faculties, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        # Confirm if the faculty with the same email exists
        existing_faculty = Faculty.query.filter_by(email=data['email']).first()
        if existing_faculty:
            abort(409, detail="Faculty with the same email already exists")

        # Create new Faculty
        new_faculty = Faculty(name=data['name'], email=data['email'], department_id=data['department_id'])
        db.session.add(new_faculty)
        db.session.commit()

        result = facultyschema.dump(new_faculty)
        return result, 201