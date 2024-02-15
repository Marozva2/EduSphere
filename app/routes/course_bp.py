from flask import Blueprint, jsonify, request
from flask_restful import Api, Resource, abort, reqparse
from models import Course, db

from serializers import CourseSchema

course_bp = Blueprint('course_bp', __name__)
api = Api(course_bp)

# Request parser for parsing course data
course_args = reqparse.RequestParser()
course_args.add_argument('course_name', type=str, required=True, help='Course name is required')
course_args.add_argument('course_code', type=str, required=True, help='Course code is required')
course_args.add_argument('department_id', type=int, required=True, help='Department ID is required')

class Courses(Resource):
    def get(self):
        courses = Course.query.all()
        course_list = [{'id': course.id, 'course_name': course.course_name, 'course_code': course.course_code, 'department_id': course.department_id} for course in courses]
        return jsonify(course_list)

    def post(self):
        data = course_args.parse_args()
        new_course = Course(course_name=data['course_name'], course_code=data['course_code'], department_id=data['department_id'])
        db.session.add(new_course)
        db.session.commit()
        return jsonify({'message': 'Course created successfully'}), 201

class CourseById(Resource):
    def get(self, id):
        course = Course.query.get(id)
        if not course:
            abort(404, message=f'Course with id {id} does not exist')
        return jsonify({'id': course.id, 'course_name': course.course_name, 'course_code': course.course_code, 'department_id': course.department_id})

    def put(self, id):
        course = Course.query.get(id)
        if not course:
            abort(404, message=f'Course with id {id} does not exist')
        
        data = course_args.parse_args()
        course.course_name = data['course_name']
        course.course_code = data['course_code']
        course.department_id = data['department_id']

        db.session.commit()
        return jsonify({'message': 'Course updated successfully'})

    def delete(self, id):
        course = Course.query.get(id)
        if not course:
            abort(404, message=f'Course with id {id} does not exist')

        db.session.delete(course)
        db.session.commit()
        return jsonify({'message': 'Course deleted successfully'})

api.add_resource(Courses, '/courses')
api.add_resource(CourseById, '/course/<string:id>')
