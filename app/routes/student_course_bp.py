from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow

from models import StudentCourses, db


from serializers import StudentCourseSchema

student_course_bp = Blueprint('student_course_bp', __name__)
ma = Marshmallow(student_course_bp)
api = Api(student_course_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('id', type=int, required=True, help='ID is required')
post_args.add_argument('student_id', type=str,
                       required=True, help='student_id is required')
post_args.add_argument('course_id', type=int, required=True,
                       help='course_id is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('student_id', type=int)
patch_args.add_argument('course_id', type=int)


student_courses_schema = StudentCourseSchema(many=True)
student_courses_single = StudentCourseSchema()


class StudentCoursesRs(Resource):
    def get(self):
        student_courses = StudentCourses.query.all()
        result = student_courses_schema.dump(student_courses, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        student_courses = StudentCourses.query.filter_by(id=id).first()
        if not student_courses:
            abort(409, detail="student_courses with the same id already exists")

        new_student_courses = StudentCourses(
            student_id=data['student_id'], course_id=data['course_id'])
        db.session.add(new_student_courses)
        db.session.commit()

        result = student_courses_schema.dump(new_student_courses)
        return result, 201


class StudentCoursesByIdRs(Resource):
    def get(self, id):
        student_course = StudentCourses.query.get(id)
        if not student_course:
            abort(404, detail=f'student_courses with id {id} does not exist')

        result = student_courses_single.dump(student_course)
        return jsonify(result)

    def patch(self, id):
        student_course = StudentCourses.query.get(id)
        if not student_course:
            abort(404, detail=f'student_courses with {id} does not exist')

        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(student_course, key, value)
            db.session.commit()

            result = student_courses_single.dump(student_course)
            return jsonify(result)

    def delete(self, id):
        student_course = StudentCourses.query.get(id)
        if not student_course:
            abort(404, detail=f'student_courses with id {id} does not exist')

        db.session.delete(student_course)
        db.session.commit()
        return f'student_courses with {id=} has been successfully deleted.', 204


api.add_resource(StudentCourses, '/student_courses')
api.add_resource(StudentCoursesByIdRs, '/student_course/<int:id>')
