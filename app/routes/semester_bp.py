from flask import Blueprint, jsonify
from flask_marshmallow import Marshmallow
from flask_restful import Api, Resource, abort, reqparse
from datetime import datetime

from models import db, Semester


from serializers import SemesterSchema

semester_bp = Blueprint('semester_bp', __name__)
ma = Marshmallow(semester_bp)
api = Api(semester_bp)


post_args = reqparse.RequestParser()
# post_args.add_argument('id', type=int, required=True, help='ID is required')
post_args.add_argument('name', type=str, required=True,
                       help='Name is required')
post_args.add_argument('start_date', type=str,
                       required=True, help='Start_date is required')
post_args.add_argument('end_date', type=str, required=True,
                       help='End_date is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('name', type=str)
patch_args.add_argument('password', type=str)
patch_args.add_argument('start_date', type=str)
patch_args.add_argument('end_date', type=str)


semesterschema = SemesterSchema(many=True)
semesterschema_single = SemesterSchema()


class SemesterRs(Resource):
    def get(self):
        semesters = Semester.query.all()
        result = semesterschema.dump(semesters, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        start_date_str = data['start_date']
        start_date_obj = datetime.strptime(start_date_str, '%Y-%m-%d').date()

        end_date_str = data['end_date']
        end_date_obj = datetime.strptime(end_date_str, '%Y-%m-%d').date()

        semester = Semester.query.filter_by(id='id').first()
        if semester:
            abort(409, detail=f"Semester with the same id already exists")

        new_sem = Semester(
            name=data['name'], start_date=start_date_obj, end_date=end_date_obj)
        db.session.add(new_sem)
        db.session.commit()

        result = semesterschema_single.dump(new_sem)
        return result, 201


class SemesterRsById(Resource):
    def get(self, id):
        semester = Semester.query.get(id)
        if not semester:
            abort(404, detail=f"Semester with id {id} doesn't exist.")
        result = semesterschema_single.dump(semester)
        return jsonify(result)

    def patch(self, id):
        semester = Semester.query.get(id)
        if not semester:
            abort(404, detail=f"Semester with id {id} doesn't exist")
        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(semester, key, value)
        db.session.commit()

        result = semesterschema_single.dump(semester)
        return jsonify(result)

    def delete(self, id):
        semester = Semester.query.get(id)
        if not semester:
            abort(404, detail=f'Semester with id {id} does not exist')

        db.session.delete(semester)
        db.session.commit()
        return f'Semester with {id=} has been successfully deleted.', 204


api.add_resource(SemesterRs, '/semesters')
api.add_resource(SemesterRsById, '/semester/<string:id>')
