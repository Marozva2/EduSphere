from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow
from datetime import datetime

from models import Unit, db


from serializers import UnitSchema

unit_bp = Blueprint('unit_bp', __name__)
ma = Marshmallow(unit_bp)
api = Api(unit_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('id', type=int, required=True, help='ID is required')
post_args.add_argument('unit_code', type=str,
                       required=True, help='Unit_code is required')
post_args.add_argument('name', type=str, required=True,
                       help='Name is required')
post_args.add_argument('passmark', type=float, required=True,
                       help='Passmark is required')
post_args.add_argument('course_id', type=float, required=True,
                       help='Course_id is required')
post_args.add_argument('contact_hours', type=float, required=True,
                       help='Contact_hours is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('unit_code', type=str)
patch_args.add_argument('name', type=str)
patch_args.add_argument('passmark', type=float)
patch_args.add_argument('course_id', type=float)
patch_args.add_argument('contact_hours', type=float)


unitschema = UnitSchema(many=True)
unitschema_single = UnitSchema()


class UnitRs(Resource):
    def get(self):
        units = Unit.query.all()
        result = unitschema.dump(units, many=True)
        return jsonify(result)

    def post(self):
        data = post_args.parse_args()


class UnitByIdRs(Resource):
    def get(self, id):
        single_unit = Unit.query.get(id)
        if not single_unit:
            abort(404, detail=f'Unit with id {id} does not exist')

        result = unitschema_single.dump(single_unit)
        return jsonify(result)

    def patch(self, id):
        pass

    def delete(self, id):
        unit = Unit.query.get(id)
        if not unit:
            abort(404, detail=f'Unit with id {id} does not exist')

        db.session.delete(unit)
        db.session.commit()
        return f'Unit with {id=} has been successfully deleted.', 204


api.add_resource(UnitRs, '/units')
api.add_resource(UnitByIdRs, '/unit/<int:id>')
