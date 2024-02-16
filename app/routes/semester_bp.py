from flask import Blueprint
from flask_marshmallow import Marshmallow
from flask_restful import Api, Resource, abort, reqparse
from models import db, Semester

from serializers import SemesterSchema

semester_bp = Blueprint('semester_bp', __name__)
ma = Marshmallow(semester_bp)
api = Api(semester_bp)


post_args = reqparse.RequestParser()
post_args.add_argument('id', type=int, required=True, help='ID is required')
post_args.add_argument('name', type=str, required=True, help='Name is required')
post_args.add_argument('start_date', type=str, required=True, help='Start_date is required')
post_args.add_argument('end_date', type=str, required=True, help='End_date is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('name', type=str)
patch_args.add_argument('password', type=str)
patch_args.add_argument('start_date', type=str)
patch_args.add_argument('end_date', type=str)


semesterschema = SemesterSchema(many=True)
semesterschema_single = SemesterSchema()


class SemesterRs(Resource):
    def get(self):
        pass

    def post(self):
        pass


class SemesterRsById(Resource):
    def get(self, id):
        pass

    def patch(self, id):
        pass

    def delete(self, id):
        pass


api.add_resource(SemesterRs, '/semesters')
api.add_resource(SemesterRsById, '/semester/<int:id>')
