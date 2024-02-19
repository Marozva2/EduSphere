# ----------------- Jerry Tarus -----------------
from flask import Blueprint, jsonify, abort
from flask_restful import Api, Resource, reqparse
from models import Faculty, db
from serializers import FacultySchema

faculty_bp = Blueprint('faculty_bp', __name__)
api = Api(faculty_bp)

# Request parsers for POST and PATCH requests
post_args = reqparse.RequestParser()
post_args.add_argument('id', type=str, required=True, help='ID is required')
post_args.add_argument('name', type=str, required=True, help='name is required')
post_args.add_argument('email', type=str, required=True, help='email is required')
post_args.add_argument('department_id', type=int, required=True, help='Department is required')
patch_args = reqparse.RequestParser()
patch_args.add_argument('name', type=str)
patch_args.add_argument('email', type=str)
patch_args.add_argument('department_id', type=int)

# Init FacultySchema for serialization
faculty_schema = FacultySchema(many=True)
faculty_schema_single = FacultySchema()


class Faculties(Resource):
    # GET request to retrieve all faculties
    def get(self):
        faculties = Faculty.query.all()
        result = faculty_schema.dump(faculties)
        return jsonify(result)

    # POST request to create a new faculty
    def post(self):
        data = post_args.parse_args()

        # Check if faculty with the same id already exists
        faculties = Faculty.query.filter_by(id=data[id]).first()
        if faculties:
            abort(409, detail=f"Oups! Faculty with that id already exists")

        # Create a new faculty instance and add it to the db
        new_faculty = Faculty(
            name=data['name'], email=data['email'], department_id=data['department_id'])
        db.session.add(new_faculty)
        db.session.commit()

        # Serialize and return the new faculty
        result = faculty_schema.dump(new_faculty)
        return result, 201