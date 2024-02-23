from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow

from models import CourseSemester, db


from serializers import CourseSemesterSchema

course_sem_bp = Blueprint('course_sem_bp', __name__)
ma = Marshmallow(course_sem_bp)
api = Api(course_sem_bp)

post_args = reqparse.RequestParser()
# post_args.add_argument('id', type=int, required=True, help='ID is required')
post_args.add_argument('course_id', type=int,
                       required=True, help='course_id is required')
post_args.add_argument('semester_id', type=int, required=True,
                       help='semester_id is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('course_id', type=int)
patch_args.add_argument('semester_id', type=int)


course_sem = CourseSemesterSchema(many=True)
course_sem_single = CourseSemesterSchema()


class CourseSemesterRs(Resource):
    def get(self):
        course_semester = CourseSemester.query.all()
        result = course_sem.dump(course_semester)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        course_sem = CourseSemester.query.filter_by(id='id').first()
        if course_sem:
            abort(409, detail="Course_sem with the same id already exists")

        new_course_sem = CourseSemester(
            course_id=data['course_id'], semester_id=data['semester_id'])
        db.session.add(new_course_sem)
        db.session.commit()

        result = course_sem_single.dump(new_course_sem)
        return result, 201


class CourseSemesterByIdRs(Resource):
    def get(self, id):
        course_sem = CourseSemester.query.get(id)
        if not course_sem:
            abort(404, detail=f'course_sem with id {id} does not exist')

        result = course_sem_single.dump(course_sem)
        return jsonify(result)

    def patch(self, id):
        course_sem = CourseSemester.query.get(id)
        if not course_sem:
            abort(404, detail=f'course_sem with {id} does not exist')

        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(course_sem, key, value)
            db.session.commit()

            result = course_sem_single.dump(course_sem)
            return jsonify(result)

    def delete(self, id):
        course_sem = CourseSemester.query.get(id)
        if not course_sem:
            abort(404, detail=f'course_sem with id {id} does not exist')

        db.session.delete(course_sem)
        db.session.commit()
        return f'course_sem with {id=} has been successfully deleted.', 204


api.add_resource(CourseSemesterRs, '/course_sem')
api.add_resource(CourseSemesterByIdRs, '/course_sem/<string:id>')
