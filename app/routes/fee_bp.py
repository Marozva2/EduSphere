from flask import Blueprint, jsonify, abort
from flask_restful import Api, Resource, reqparse
from models import Fee, db
from serializers import FeeSchema


fees_bp = Blueprint('fees_bp', __name__)
api = Api(fees_bp)


post_args = reqparse.RequestParser()
post_args.add_argument('amount', type=float, required=True,
                       help='fee amount is required')
post_args.add_argument('student_id', type=str, required=True,
                       help='student_id is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('amount', type=float)
patch_args.add_argument('student_id', type=str)


fee_schema = FeeSchema(many=True)
fee_schema_single = FeeSchema()


class Fees(Resource):
    def get(self):
        fees = Fee.query.all()
        result = fee_schema.dump(fees)

        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        new_fee = Fee(
            amount=data['amount'], student_id=data['student_id'])
        db.session.add(new_fee)
        db.session.commit()

        result = fee_schema_single.dump(new_fee)
        return result, 201


class FeesById(Resource):
    def get(self, id):
        fee = Fee.query.get(id)
        if not fee:
            abort(404, message=f"fee with id {id} doesn't exist")
        result = fee_schema_single.dump(fee)
        return jsonify(result)

    def patch(self, id):
        fee = Fee.query.get(id)
        if not fee:
            abort(404, message="Not found")
        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(fee, key, value)
        db.session.commit()

        result = fee_schema_single.dump(fee)
        return jsonify(result)

    def delete(self, id):
        fee = Fee.query.get(id)
        if not fee:
            abort(404)

        db.session.delete(fee)
        db.session.commit()
        return f'fee with {id=} has been deleted.', 204


api.add_resource(Fees, '/fees')
api.add_resource(FeesById, '/fee/<string:id>')
