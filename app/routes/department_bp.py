from flask import Blueprint, jsonify, abort
from flask_restful import Api, Resource, reqparse
from models import Department, db
from serializers import DepartmentSchema


department_bp = Blueprint('department_bp', __name__)
api = Api(department_bp)


post_args = reqparse.RequestParser()
# post_args.add_argument('id', type=str, required=True,
#                        help='Id is required')
post_args.add_argument('department_name', type=str, required=True,
                       help='Department name is required')
post_args.add_argument('faculty_id', type=str, required=True,
                       help='faculty_id is required')


patch_args = reqparse.RequestParser()
patch_args.add_argument('department_name', type=str)
patch_args.add_argument('faculty_id', type=str)


department_schema = DepartmentSchema(many=True)
department_schema_single = DepartmentSchema()


class Departments(Resource):
    def get(self):
        departments = Department.query.all()
        result = department_schema.dump(departments)

        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        departments = Department.query.filter_by(id='id').first()
        if departments:
            abort(409, detail=f"Department with the same id already exists")

        new_department = Department(
            department_name=data['department_name'], faculty_id=data['faculty_id'])
        db.session.add(new_department)
        db.session.commit()

        result = department_schema_single.dump(new_department)
        return result, 201


class DepartmentById(Resource):
    def get(self, id):
        department = Department.query.get(id)
        if not department:
            abort(404, detail=f"department with id {id} doesn't exist")
        result = department_schema_single.dump(department)
        return jsonify(result)

    def patch(self, id):
        department = Department.query.get(id)
        if not department:
            abort(404, detail=f"department with {id} doesn't exist")
        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(department, key, value)
        db.session.commit()

        result = department_schema_single.dump(department)
        return jsonify(result)

    def delete(self, id):
        department = Department.query.get(id)
        if not department:
            abort(404, detail=f"Department with id {id} doesn't exist")

        db.session.delete(department)
        db.session.commit()
        return f'department with {id=} has been deleted.', 204


api.add_resource(Departments, '/departments')
api.add_resource(DepartmentById, '/department/<string:id>')
