from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow

from models import Student, db


from serializers import StudentSchema

student_bp = Blueprint('student_bp', __name__)
ma = Marshmallow(student_bp)
api = Api(student_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('id', type=int, required=True, help='ID is required')
post_args.add_argument('first_name', type=str,
                       required=True, help='first_name is required')
post_args.add_argument('last_name', type=str, required=True,
                       help='last_name is required')
post_args.add_argument('email', type=str, required=True,
                       help='email is required')
post_args.add_argument('department_id', type=str, required=True,
                       help='department is required')
post_args.add_argument('profile_photo', type=str, required=True,
                       help='profile_photo is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('first_name', type=str)
patch_args.add_argument('last_name', type=str)
patch_args.add_argument('email', type=str)
patch_args.add_argument('department_id', type=int)
patch_args.add_argument('profile_photo', type=str)


student_schema = StudentSchema(many=True)
student_schema_single = StudentSchema()


class StudentRs(Resource):
    def get(self):
        students = Student.query.all()
        result = student_schema.dump(students, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        student = Student.query.filter_by(id=id).first()
        if not student:
            abort(409, detail="Student with the same id already exists")

        new_student = Student(first_name=data['first_name'], last_name=data['last_name'], email=data['email'],
                              department_id=data['department_id'], profile_photo=data['profile_photo'])
        db.session.add(new_student)
        db.session.commit()

        result = student_schema.dump(new_student)
        return result, 201


class StudentByIdRs(Resource):
    def get(self, id):
        student = Student.query.get(id)
        if not student:
            abort(404, detail=f'student with id {id} does not exist')

        result = student_schema_single.dump(student)
        return jsonify(result)

    def patch(self, id):
        student = Student.query.get(id)
        if not student:
            abort(404, detail=f'student with {id} does not exist')

        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(student, key, value)
            db.session.commit()

            result = student_schema_single.dump(student)
            return jsonify(result)

    def delete(self, id):
        student = Student.query.get(id)
        if not student:
            abort(404, detail=f'student with id {id} does not exist')

        db.session.delete(student)
        db.session.commit()
        return f'student with {id=} has been successfully deleted.', 204


api.add_resource(StudentRs, '/students')
api.add_resource(StudentByIdRs, '/student/<int:id>')
