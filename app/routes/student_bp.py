from flask import Blueprint, jsonify, send_file
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp

from models import Student, ExtraCurricularActivity, ExamCard, db


from serializers import StudentSchema, ExtraCurricularActivitySchema, ExamCardSchema

student_bp = Blueprint('student_bp', __name__)
ma = Marshmallow(student_bp)
api = Api(student_bp)

# Define request parsers for each resource
post_student_args = reqparse.RequestParser()
post_student_args.add_argument('first_name', type=str, required=True, help='first_name is required')
post_student_args.add_argument('last_name', type=str, required=True, help='last_name is required')
post_student_args.add_argument('email', type=str, required=True, help='email is required')
post_student_args.add_argument('department_id', type=str, required=True, help='department is required')
post_student_args.add_argument('profile_photo', type=str, required=True, help='profile_photo is required')

post_activity_args = reqparse.RequestParser()
post_activity_args.add_argument('name', type=str, required=True, help='Activity name is required')
post_activity_args.add_argument('description', type=str, required=True, help='Activity description is required')
post_activity_args.add_argument('student_id', type=int, required=True, help='Student ID is required')

get_examcard_args = reqparse.RequestParser()
get_examcard_args.add_argument('student_id', type=int, required=True, help='Student ID is required')


# Define marshmallow schemas for each resource
student_schema = StudentSchema(many=True)
student_schema_single = StudentSchema()
activity_schema = ExtraCurricularActivitySchema(many=True)
examcard_schema = ExamCardSchema()


class StudentRs(Resource):
    def get(self):
        students = Student.query.all()
        result = student_schema.dump(students)
        return jsonify(result)

    def post(self):
        data = post_student_args.parse_args()

        student = Student.query.filter_by(email=data['email']).first()
        if student:
            abort(409, detail="Student with the same email already exists")

        new_student = Student(first_name=data['first_name'], last_name=data['last_name'], email=data['email'],
                              department_id=data['department_id'], profile_photo=data['profile_photo'])
        db.session.add(new_student)
        db.session.commit()

        result = student_schema_single.dump(new_student)
        return result, 201


class StudentByIdRs(Resource):
    def get(self, id):
        student = Student.query.get(id)
        if not student:
            abort(404, detail=f'Student with id {id} does not exist')

        result = student_schema_single.dump(student)
        return jsonify(result)

    def patch(self, id):
        student = Student.query.get(id)
        if not student:
            abort(404, detail=f'Student with id {id} does not exist')

        data = post_student_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(student, key, value)
            db.session.commit()

            result = student_schema_single.dump(student)
            return jsonify(result)

    def delete(self, id):
        student = Student.query.get(id)
        if not student:
            abort(404, detail=f'Student with id {id} does not exist')

        db.session.delete(student)
        db.session.commit()
        return f'Student with id {id} has been successfully deleted.', 204


class ExtraCurricularActivityRs(Resource):
    def post(self):
        data = post_activity_args.parse_args()

        new_activity = ExtraCurricularActivity(name=data['name'], description=data['description'], student_id=data['student_id'])
        db.session.add(new_activity)
        db.session.commit()

        result = activity_schema.dump(new_activity)
        return result, 201

    def get(self):
        activities = ExtraCurricularActivity.query.all()
        result = activity_schema.dump(activities)
        return jsonify(result)


class ExamCardRs(Resource):
    def get(self):
        data = get_examcard_args.parse_args()
        student_id = data['student_id']
        examcard = ExamCard.query.filter_by(student_id=student_id).first()
        if not examcard:
            abort(404, detail=f'Exam card for student with id {student_id} does not exist')

        # Assume file_path is the path to the exam card file
        file_path = examcard.file_path
        return send_file(file_path, as_attachment=True)
# This function will be used by Flask-JWT for authentication.
def authenticate(email, password):
    student = Student.query.filter_by(email=email).first()
    if student and safe_str_cmp(student.password.encode('utf-8'), password.encode('utf-8')):
        return student

# This function is used by Flask-JWT to get the identity of a user based on the JWT token.
def identity(payload):
    student_id = payload['identity']
    return Student.query.get(student_id)

jwt = JWT(student_bp, authenticate, identity)


class Signup(Resource):
    def post(self):
        # Implement your signup logic here, similar to the existing POST /students endpoint
        data = post_student_args.parse_args()
        new_student = Student(first_name=data['first_name'], last_name=data['last_name'], email=data['email'],
                              department_id=data['department_id'], profile_photo=data['profile_photo'],
                              password=data['password'])  # Assuming there's a password field
        db.session.add(new_student)
        db.session.commit()
        result = student_schema_single.dump(new_student)
        return result, 201


class Login(Resource):
    def post(self):
        data = post_student_args.parse_args()
        email = data['email']
        password = data['password']
        student = authenticate(email, password)
        if student:
            # Create a JWT token for the authenticated user
            token = jwt.jwt_encode_callback(student)
            return {'token': token.decode('utf-8')}
        else:
            return {'message': 'Authentication failed'}, 401
    



api.add_resource(StudentRs, '/students')
api.add_resource(StudentByIdRs, '/student/<int:id>')
api.add_resource(ExtraCurricularActivityRs, '/activities')
api.add_resource(ExamCardRs, '/examcard')
api.add_resource(Signup, '/signup')
api.add_resource(Login, '/login')