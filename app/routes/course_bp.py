from flask import Blueprint, jsonify, request
from flask_restful import Api, Resource
from models import Course
from serializers import CourseSchema

students_bp = Blueprint('students_bp', __name__)
api = Api(students_bp)

class CoursesResource(Resource):
    def get(self):
        # Fetch all courses from the database
        courses = Course.query.all()

        # Serialize the courses into JSON
        course_schema = CourseSchema(many=True)
        result = course_schema.dump(courses)

        return jsonify(result)

    def post(self, course_id):
        # Logic to apply for a course
        # This will depend on the specific requirements of your application
        pass

api.add_resource(CoursesResource, '/courses')
