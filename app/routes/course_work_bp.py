
from flask import Blueprint, jsonify
from flask_restful import Api, Resource, reqparse, abort
from models import CourseWork, db

from serializers import CourseWorkSchema

course_work_bp = Blueprint('course_work_bp', __name__)
api = Api(course_work_bp)

# Request parser for parsing course work data
course_work_args = reqparse.RequestParser()
course_work_args.add_argument('unit_id', type=int, required=True, help='Unit ID is required')
course_work_args.add_argument('student_id', type=int, required=True, help='Student ID is required')
course_work_args.add_argument('score', type=float, required=True, help='Score is required')

class CourseWorks(Resource):
    def get(self):
        course_works = CourseWork.query.all()
        course_work_list = [{'id': course_work.id, 'unit_id': course_work.unit_id, 'student_id': course_work.student_id, 'score': course_work.score} for course_work in course_works]
        return jsonify(course_work_list)

    def post(self):
        data = course_work_args.parse_args()
        new_course_work = CourseWork(unit_id=data['unit_id'], student_id=data['student_id'], score=data['score'])
        db.session.add(new_course_work)
        db.session.commit()
        return jsonify({'message': 'Course work created successfully'}), 201

class CourseWorkById(Resource):
    def get(self, id):
        course_work = CourseWork.query.get(id)
        if not course_work:
            abort(404, message=f'Course work with id {id} does not exist')
        return jsonify({'id': course_work.id, 'unit_id': course_work.unit_id, 'student_id': course_work.student_id, 'score': course_work.score})

    def put(self, id):
        course_work = CourseWork.query.get(id)
        if not course_work:
            abort(404, message=f'Course work with id {id} does not exist')
        
        data = course_work_args.parse_args()
        course_work.unit_id = data['unit_id']
        course_work.student_id = data['student_id']
        course_work.score = data['score']

        db.session.commit()
        return jsonify({'message': 'Course work updated successfully'})

    def delete(self, id):
        course_work = CourseWork.query.get(id)
        if not course_work:
            abort(404, message=f'Course work with id {id} does not exist')

        db.session.delete(course_work)
        db.session.commit()
        return jsonify({'message': 'Course work deleted successfully'})

api.add_resource(CourseWorks, '/course-works')
api.add_resource(CourseWorkById, '/course-work/<string:id>')
