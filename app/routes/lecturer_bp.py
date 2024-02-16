from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow
from datetime import datetime

from models import Lecturer, db


from serializers import LecturerSchema

lecturer_bp = Blueprint('lecturer_bp', __name__)
ma = Marshmallow(lecturer_bp)
api = Api(lecturer_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('id', type=int, required=True, help='ID is required')
post_args.add_argument('lecture_title', type=str,
                       required=True, help='Lecture_title is required')
post_args.add_argument('facult', type=str, required=True,
                       help='Facult_id is required')
post_args.add_argument('datetime', type=str, required=True,
                       help='Datetime is required')
post_args.add_argument('location', type=str, required=True,
                       help='Location is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('lecture_title', type=str)
patch_args.add_argument('faculty_id', type=str)
patch_args.add_argument('datetime', type=str)
patch_args.add_argument('location', type=str)


lecturerschema = LecturerSchema(many=True)
lecturerschema_single = LecturerSchema()


class LecturerRs(Resource):
    def get(self):
        pass

    def post(self):
        pass


class LectureByIdRs(Resource):
    def get(self, id):
        pass

    def patch(self, id):
        pass

    def delete(self, id):
        pass


api.add_resource(LecturerRs, '/lecturer')
api.add_resource(LectureByIdRs, '/lecturer/<int:id>')
