#  -------------------- Jerry Tarus -------------------

from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow
from models import Lecturer, db
from serializers import LecturerSchema

lecturer_bp = Blueprint('lecturer_bp', __name__)
ma = Marshmallow(lecturer_bp)
api = Api(lecturer_bp)

# Request parsers for POST and PATCH requests
post_args = reqparse.RequestParser()
post_args.add_argument('id', type=int, required=True, help='ID is required')
post_args.add_argument('lecture_title', type=str, required=True, help='Lecture_title is required')
post_args.add_argument('facult', type=str, required=True, help='Facult_id is required')
post_args.add_argument('datetime', type=str, required=True, help='Datetime is required')
post_args.add_argument('location', type=str, required=True, help='Location is required')
patch_args = reqparse.RequestParser()
patch_args.add_argument('lecture_title', type=str)
patch_args.add_argument('faculty_id', type=str)
patch_args.add_argument('datetime', type=str)
patch_args.add_argument('location', type=str)


lecturerschema = LecturerSchema(many=True)
lecturerschema_single = LecturerSchema()

# Resource classes for handling lecturer-related operations
class LecturerRs(Resource):
    # GET request to retrieve all lecturers
    def get(self):
        lecturer = Lecturer.query.all()
        result = Lecturer.dump(lecturer, many=True)
        return jsonify(result)
    
    # Handler for POST requests to create new lecturer
    def post(self):
        data = post_args.parse_args()

        # Check if lecturer with the same email already exists
        lecturer = Lecturer.query.filter_by(email=data['email']).first()
        if lecturer:
            abort(409, detail="lecturer with this id already exists")

        # Create new lecturer and add it to db
        new_lecturer = Lecturer(lecture_title=data['lecture_title'], facult_id=data['facult_id'],
                                datetime=data['datetime'], location=data['location'])
        
        db.session.add(new_lecturer)
        db.session.commit()

        
        # Serialize and return the new lecturer
        result = lecturerschema.dump(new_lecturer)
        return result, 201
    
