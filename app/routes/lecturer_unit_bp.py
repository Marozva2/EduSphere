from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow

from models import LecturerUnit, db


from serializers import LecturerUnitschema

lecturer_unit_bp = Blueprint('lecturer_unit_bp', __name__)
ma = Marshmallow(lecturer_unit_bp)
api = Api(lecturer_unit_bp)

post_args = reqparse.RequestParser()
# post_args.add_argument('id', type=str, required=True, help='ID is required')
post_args.add_argument('lecturer_id', type=str,
                       required=True, help='lecturer_id is required')
post_args.add_argument('unit_id', type=str, required=True,
                       help='unit_id is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('lecturer_id', type=str)
patch_args.add_argument('unit_id', type=str)


lecture_unit_schema = LecturerUnitschema(many=True)
lecture_unit_single = LecturerUnitschema()


class LecturerUnitRs(Resource):
    def get(self):
        lecture_unit = LecturerUnit.query.all()
        result = lecture_unit_schema.dump(lecture_unit, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        lecture_unit = LecturerUnit.query.filter_by(id='id').first()
        if lecture_unit:
            abort(409, detail="lecture_unit with the same id already exists")

        new_lecture_unit = LecturerUnit(
            lecturer_id=data['lecturer_id'], unit_id=data['unit_id'])
        db.session.add(new_lecture_unit)
        db.session.commit()

        result = lecture_unit_single.dump(new_lecture_unit)
        return result, 201


class LecturerUnitByIdRs(Resource):
    def get(self, id):
        lecture_unit = LecturerUnit.query.get(id)
        if not lecture_unit:
            abort(404, detail=f'lecturer_unit with id {id} does not exist')

        result = lecture_unit_single.dump(lecture_unit)
        return jsonify(result)

    def patch(self, id):
        lecture_unit = LecturerUnit.query.get(id)
        if not lecture_unit:
            abort(404, detail=f'lecturer_unit with {id} does not exist')

        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(lecture_unit, key, value)
            db.session.commit()

            result = lecture_unit_single.dump(lecture_unit)
            return jsonify(result)

    def delete(self, id):
        lecturer_unit = LecturerUnit.query.get(id)
        if not lecturer_unit:
            abort(404, detail=f'lecturer_unit with id {id} does not exist')

        db.session.delete(lecturer_unit)
        db.session.commit()
        return f'lecturer_unit with {id=} has been successfully deleted.', 204


api.add_resource(LecturerUnitRs, '/lecturer_units')
api.add_resource(LecturerUnitByIdRs, '/lecturer_unit/<string:id>')
