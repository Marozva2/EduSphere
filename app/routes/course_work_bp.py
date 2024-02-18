from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow

from models import CourseWork, db


from serializers import CourseWorkSchema

coursework_bp = Blueprint('coursework_bp', __name__)
ma = Marshmallow(coursework_bp)
api = Api(coursework_bp)

post_args = reqparse.RequestParser()
# post_args.add_argument('id', type=str, required=True, help='ID is required')
post_args.add_argument('unit_id', type=int,
                       required=True, help='Unit_id is required')
post_args.add_argument('student_id', type=int, required=True,
                       help='student_id is required')
post_args.add_argument('score', type=float, required=True,
                       help='score is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('unit_id', type=int)
patch_args.add_argument('student_id', type=int)
patch_args.add_argument('score', type=float)


course_work_schema = CourseWorkSchema(many=True)
course_work_single = CourseWorkSchema()


class CourseWorkRs(Resource):
    def get(self):
        course_work = CourseWork.query.all()
        result = course_work_schema.dump(course_work, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        course_work = CourseWork.query.filter_by(id='id').first()
        if course_work:
            abort(409, detail="course_work with the same id already exists")

        new_course_work = CourseWork(
            unit_id=data['unit_id'], student_id=data['student_id'], score=data['score'])
        db.session.add(new_course_work)
        db.session.commit()

        result = course_work_single.dump(new_course_work)
        return result, 201


class CourseWorkByIdRs(Resource):
    def get(self, id):
        course_work = CourseWork.query.get(id)
        if not course_work:
            abort(404, detail=f'course_work with id {id} does not exist')

        result = course_work_single.dump(course_work)
        return jsonify(result)

    def patch(self, id):
        course_work = CourseWork.query.get(id)
        if not course_work:
            abort(404, detail=f'course_work with {id} does not exist')

        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(course_work, key, value)
            db.session.commit()

            result = course_work_single.dump(course_work)
            return jsonify(result)

    def delete(self, id):
        course_work = CourseWork.query.get(id)
        if not course_work:
            abort(404, detail=f'course_work with id {id} does not exist')

        db.session.delete(course_work)
        db.session.commit()
        return f'course_work with {id=} has been successfully deleted.', 204


api.add_resource(CourseWorkRs, '/course_works')
api.add_resource(CourseWorkByIdRs, '/course_work/<string:id>')
