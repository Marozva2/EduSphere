from flask import Blueprint, jsonify, abort
from flask_restful import Api, Resource, reqparse
from models import Department, db
from serializers import DepartmentSchema

# This is a blueprint for department
department_bp = Blueprint('department_bp', __name__)
api = Api(department_bp)

# Request parsers for POST and PATCH requests
post_args = reqparse.RequestParser()
post_args.add_argument('id', type=str, required=True,
                       help='Id is required')
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
     # This handler GET request retrieves all departments
    def get(self):
        departments = Department.query.all()
        result = department_schema.dump(departments)

        return jsonify(result)

    # This POST request creates a new department
    def post(self):
        data = post_args.parse_args()

        # Check if department exists then throw an error if true
        departments = Department.query.filter_by(id=data[id]).first()
        if not departments:
            abort(409, detail=f"Department with this id{id} already exists")

        # Create new department then and add it to db
        new_department = Department(
            department_name=data['department_name'], faculty_id=data['faculty_id'])
        db.session.add(new_department)
        db.session.commit()

        # Lastly, serialize and return the new department
        result = department_schema.dump(new_department)
        return result, 201
    

class DepartmentById(Resource):
    # Handler to retrieve a department by id
    def get(self, id):
        department = Department.query.get(id)
        if not department:
            abort(404, detail=f"department with id {id} doesn't exist")
        result = department_schema_single.dump(department)
        return jsonify(result)

    # Handler to help update a department by id
    def patch(self, id):
        department = Department.query.get(id)
        if not department:
            abort(404, detail=f"department with {id} doesn't exist")
        data = patch_args.parse_args()

        # This helps to update department attributes based on the provided data
        for key, value in data.items():
            if value is not None:
                setattr(department, key, value)
        db.session.commit()

        # Serialize and return the updated department
        result = department_schema_single.dump(department)
        return jsonify(result)

    # Delete a department by id
    def delete(self, id):
        department = Department.query.get(id)
        if not department:
            abort(404, detail=f"Department with id {id} doesn't exist")

        # Delete department from the db
        db.session.delete(department)
        db.session.commit()
        return f'department with {id=} has been deleted.', 204

# Add Resource classes to the API with their respective routes
api.add_resource(Departments, '/departments')
api.add_resource(DepartmentById, '/department/<int:id>') 