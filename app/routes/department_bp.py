# --------------------- JERRY TARUS ------------------------
from flask import Blueprint, jsonify, abort
from flask_restful import Api, Resource, reqparse
from models import Department, db
from serializers import DepartmentSchema


department_bp = Blueprint('department_bp', __name__)
api = Api(department_bp)

# Create request parsers for POST and PATCH requests
post_args = reqparse.RequestParser()
# post_args.add_argument('id', type=str, required=True,
#                        help='Id is required')

post_args.add_argument('department_name', type=str, required=True, help='Department name is required')
post_args.add_argument('faculty_id', type=str, required=True, help='faculty_id is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('department_name', type=str)
patch_args.add_argument('faculty_id', type=str)

# Initialize serializers for Department objects
department_schema = DepartmentSchema(many=True)
department_schema_single = DepartmentSchema()


class Departments(Resource):
    # GET request to retrieve all departments
    def get(self):
        departments = Department.query.all()
        result = department_schema.dump(departments)
        return jsonify(result)

    
    def post(self):
        data = post_args.parse_args()

        # Check if department with the same id exists
        departments = Department.query.filter_by(id='id').first()
        if departments:
            abort(409, detail=f"Department with that id already exists")

        # Create new department and add it to the db
        new_department = Department(
            department_name=data['department_name'], faculty_id=data['faculty_id'])
        db.session.add(new_department)
        db.session.commit()

        # Serialize the new department and return with successful code 201
        result = department_schema_single.dump(new_department)
        return result, 201

class DepartmentById(Resource):
    # GET request retrieve a department by its id
    def get(self, id):
        department = Department.query.get(id)
        if not department:
            abort(404, detail=f"department with id {id} doesn't exist")
        result = department_schema_single.dump(department)
        return jsonify(result)

    # Update a department by its id
    def patch(self, id):
        department = Department.query.get(id)
        if not department:
            abort(404, detail=f"department with {id} doesn't exist")
        data = patch_args.parse_args()

        # Update department attributes
        for key, value in data.items():
            if value is not None:
                setattr(department, key, value)
        db.session.commit()

        # Serialize the updated department and return it
        result = department_schema_single.dump(department)
        return jsonify(result)

    # Delete a department by its id
    def delete(self, id):
        department = Department.query.get(id)
        if not department:
            abort(404, detail=f"Department with id {id} doesn't exist")

        # Delete the department from the database
        db.session.delete(department)
        db.session.commit()
        return f'department with {id=} has been deleted.', 204

api.add_resource(Departments, '/departments')
api.add_resource(DepartmentById, '/department/<string:id>')
