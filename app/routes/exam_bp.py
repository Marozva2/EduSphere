from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow
from datetime import datetime

from models import Exam, db


from serializers import ExamSchema

exam_bp = Blueprint('exam_bp', __name__)
ma = Marshmallow(exam_bp)
api = Api(exam_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('unit_id', type=int, required=True,
                       help='unit_id is required')
post_args.add_argument('score', type=float,
                       required=True, help='Score is required')
post_args.add_argument('student_id', type=int, required=True,
                       help='Student_id is required')
post_args.add_argument('grade', type=str, required=True,
                       help='Grade is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('unit_id', type=str)
patch_args.add_argument('score', type=float)
patch_args.add_argument('student_id', type=int)
patch_args.add_argument('grade', type=str)


examschema = ExamSchema(many=True)
examschema_single = ExamSchema()


class ExamRs(Resource):
    def get(self):
        pass

    def post(self):
        pass


class ExamRsById(Resource):
    def get(self, id):
        pass

    def patch(self, id):
        pass

    def delete(self, id):
        pass


api.add_resource(ExamRs, '/exams')
api.add_resource(ExamRsById, '/exam/<int:id>')
