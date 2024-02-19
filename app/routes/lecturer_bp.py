# ---------------------JERRY TARUS -----------------------
from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow
from datetime import datetime


from models import Lecturer, db
from serializers import LecturerSchema


lecturer_bp = Blueprint('lecturer_bp', __name__)
ma = Marshmallow(lecturer_bp)
api = Api(lecturer_bp)

# Request parsers for POST and PATCH requests
post_args = reqparse.RequestParser()
post_args.add_argument('lecture_title', type=str, required=True, help='Lecture title is required')
post_args.add_argument('facult_id', type=int, required=True, help='Faculty ID is required')
post_args.add_argument('datetime', type=str, required=True, help='Datetime is required')
post_args.add_argument('location', type=str, required=True, help='Location is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('lecture_title', type=str)
patch_args.add_argument('facult_id', type=int)
patch_args.add_argument('datetime', type=str)
patch_args.add_argument('location', type=str)


lecturer_schema = LecturerSchema(many=True)
lecturer_schema_single = LecturerSchema()


class LecturerRs(Resource):
    def get(self):
        # Retrieve all lecturers from the database
        lecturers = Lecturer.query.all()
        result = lecturer_schema.dump(lecturers, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()
        datetime_obj = datetime.strptime(data['datetime'], '%Y:%m:%d')
        lecturer = Lecturer.query.filter_by(id='id').first()
        if lecturer:
            abort(409, detail="Lecturer with this ID already exists")
        new_lecturer = Lecturer(lecture_title=data['lecture_title'], facult_id=data['facult_id'],
                                datetime=datetime_obj, location=data['location'])
        db.session.add(new_lecturer)
        db.session.commit()
        result = lecturer_schema_single.dump(new_lecturer)
        return result, 201

class LectureByIdRs(Resource):
    def get(self, id):
        lecturer = Lecturer.query.get(id)
        if not lecturer:
            abort(404, detail=f'Lecturer with ID {id} does not exist')
        result = lecturer_schema_single.dump(lecturer)
        return jsonify(result)

    def patch(self, id):
        lecturer = Lecturer.query.get(id)
        if not lecturer:
            abort(404, detail=f'Lecturer with ID {id} does not exist')
        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(lecturer, key, value)
        db.session.commit()
        result = lecturer_schema_single.dump(lecturer)
        return jsonify(result)

    def delete(self, id):

        # Retrieve lecturer by ID from the database
        lecturer = Lecturer.query.get(id)
        if not lecturer:
            abort(404, detail=f'Lecturer with ID {id} does not exist')
        
        db.session.delete(lecturer)
        db.session.commit()

        return f'Lecturer with ID {id} has been successfully deleted.', 204


api.add_resource(LecturerRs, '/lecturers')
api.add_resource(LectureByIdRs, '/lecturer/<string:id>')
