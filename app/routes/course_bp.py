from flask import Blueprint, jsonify, abort
from flask_restful import Api, Resource, reqparse
from models import Course, db
from serializers import CourseSchema


courses_bp = Blueprint('courses_bp', __name__)
api = Api(courses_bp)


post_args = reqparse.RequestParser()
# post_args.add_argument('id', type=str, required=True,
#                        help='Id is required')
post_args.add_argument('course_name', type=str, required=True,
                       help='course name is required')
post_args.add_argument('course_code', type=str, required=True,
                       help='course code is required')
post_args.add_argument('department_id', type=int,
                       required=True, help='Department is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('course_name', type=str)
patch_args.add_argument('course_code', type=str)
patch_args.add_argument('department_id', type=int)


course_schema = CourseSchema(many=True)
course_schema_single = CourseSchema()


class Courses(Resource):
    def get(self):
        courses = Course.query.all()
        result = course_schema.dump(courses)

        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        courses = Course.query.filter_by(id='id').first()
        if courses:
            abort(409, message=f"Course with id {id} already exists")

        new_course = Course(
            course_name=data['course_name'], course_code=data['course_code'], department_id=data['department_id'])
        db.session.add(new_course)
        db.session.commit()

        result = course_schema_single.dump(new_course)
        return result, 201


class CourseById(Resource):
    def get(self, id):
        course = Course.query.get(id)
        if not course:
            abort(404, message=f"Course with id {id} doesn't exist")
        result = course_schema_single.dump(course)
        return jsonify(result)

    def patch(self, id):
        course = Course.query.get(id)
        if not course:
            abort(404, message="Not found")
        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(course, key, value)
        db.session.commit()

        result = course_schema_single.dump(course)
        return jsonify(result)

    def delete(self, id):
        course = Course.query.get(id)
        if not course:
            abort(404)

        db.session.delete(course)
        db.session.commit()
        return f'course with {id=} has been deleted.', 204


api.add_resource(Courses, '/courses')
api.add_resource(CourseById, '/course/<string:id>')