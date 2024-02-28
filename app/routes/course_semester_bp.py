

from flask import Blueprint, jsonify
from flask_restful import Api, Resource, reqparse, abort
from models import CourseSemester, db

from serializers import CourseSemesterSchema

course_semester_bp = Blueprint('course_semester_bp', __name__)
api = Api(course_semester_bp)

# Request parser for parsing course semester data
course_semester_args = reqparse.RequestParser()
course_semester_args.add_argument('course_id', type=int, required=True, help='Course ID is required')
course_semester_args.add_argument('semester_id', type=int, required=True, help='Semester ID is required')

class CourseSemesters(Resource):
    def get(self):
        course_semesters = CourseSemester.query.all()
        course_semester_list = [{'id': course_semester.id, 'course_id': course_semester.course_id, 'semester_id': course_semester.semester_id} for course_semester in course_semesters]
        return jsonify(course_semester_list)

    def post(self):
        data = course_semester_args.parse_args()
        new_course_semester = CourseSemester(course_id=data['course_id'], semester_id=data['semester_id'])
        db.session.add(new_course_semester)
        db.session.commit()
        return jsonify({'message': 'Course semester created successfully'}), 201

class CourseSemesterById(Resource):
    def get(self, id):
        course_semester = CourseSemester.query.get(id)
        if not course_semester:
            abort(404, message=f'Course semester with id {id} does not exist')
        return jsonify({'id': course_semester.id, 'course_id': course_semester.course_id, 'semester_id': course_semester.semester_id})

    def delete(self, id):
        course_semester = CourseSemester.query.get(id)
        if not course_semester:
            abort(404, message=f'Course semester with id {id} does not exist')

        db.session.delete(course_semester)
        db.session.commit()
        return jsonify({'message': 'Course semester deleted successfully'})

api.add_resource(CourseSemesters, '/course-semesters')
api.add_resource(CourseSemesterById, '/course-semester/<string:id>')
