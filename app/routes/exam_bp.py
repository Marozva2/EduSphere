from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow

from models import Exam, db


from serializers import ExamSchema

exam_bp = Blueprint('exam_bp', __name__)
ma = Marshmallow(exam_bp)
api = Api(exam_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('unit_id', type=str,
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
        exams = Exam.query.all()
        result = examschema.dump(exams, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        exams = Exam.query.filter_by(unit_id=data['unit_id']).first()
        if exams:
            abort(409, detail=f"exam with the same id already exists")

        new_exam = Exam(
            unit_id=data['unit_id'], score=data['score'], student_id=data['student_id'], grade=data['grade'])
        db.session.add(new_exam)
        db.session.commit()

        result = examschema_single.dump(new_exam)
        return result, 201


class ExamRsById(Resource):
    def get(self, id):
        exam = Exam.query.get(id)
        if not exam:
            abort(404, detail=f'Exam with id {id} does not exist')
        result = examschema_single.dump(exam)
        return jsonify(result)

    def patch(self, id):
        exam = Exam.query.get(id)
        if not exam:
            abort(404, detail=f'Exam with id {id} does not exist')

        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(exam, key, value)
        db.session.commit()

        result = examschema_single.dump(exam)
        return jsonify(result)

    def delete(self, id):
        exam = Exam.query.get(id)
        if not exam:
            abort(404, detail=f'exam with id {id} does not exist')

        db.session.delete(exam)
        db.session.commit()
        return f'exam with {id=} has been successfully deleted.', 204


api.add_resource(ExamRs, '/exams')
api.add_resource(ExamRsById, '/exam/<string:id>')
