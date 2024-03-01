from flask import Blueprint, jsonify, abort
from flask_restful import Api, Resource, reqparse
from models import Enrollment, db
from serializers import EnrollmentSchema


enrollment_bp = Blueprint('enrollment_bp', __name__)
api = Api(enrollment_bp)


post_args = reqparse.RequestParser()

post_args.add_argument('student_id', type=str, required=True,
                       help='enrollment name is required')
post_args.add_argument('course_id', type=str, required=True,
                       help='course_id is required')
post_args.add_argument('enrollment_date', type=str, required=True,
                       help='enrollment_date is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('student_id', type=str)
patch_args.add_argument('course_id', type=str)
patch_args.add_argument('enrollment_date', type=str)


enrollment_schema = EnrollmentSchema(many=True)
enrollment_schema_single = EnrollmentSchema()


class Enrollments(Resource):
    def get(self):
        enrollments = Enrollment.query.all()
        result = enrollment_schema.dump(enrollments)

        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        enrollments = Enrollment.query.filter_by(id='id').first()
        if enrollments:
            abort(409, detail=f"Enrollment with the same id already exists")

        new_enrollment = Enrollment(
            student_id=data['student_id'], course_id=data['course_id'], enrollment_date=data['enrollment_date'])
        db.session.add(new_enrollment)
        db.session.commit()

        result = enrollment_schema_single.dump(new_enrollment)
        return result, 201


class EnrollmentById(Resource):
    def get(self, id):
        enrollment = Enrollment.query.get(id)
        if not enrollment:
            abort(404, detail=f"Enrollment with id {id} doesn't exist")
        result = enrollment_schema_single.dump(enrollment)
        return jsonify(result)

    def patch(self, id):
        enrollment = Enrollment.query.get(id)
        if not enrollment:
            abort(404, detail=f"enrollment with {id} doesn't exist")
        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(enrollment, key, value)
        db.session.commit()

        result = enrollment_schema_single.dump(enrollment)
        return jsonify(result)

    def delete(self, id):
        enrollment = Enrollment.query.get(id)
        if not enrollment:
            abort(404, detail=f"enrollment with id {id} doesn't exist")

        db.session.delete(enrollment)
        db.session.commit()
        return f'enrollment with {id=} has been deleted.', 204


api.add_resource(Enrollments, '/enrollments')
api.add_resource(EnrollmentById, '/enrollment/<string:id>')
