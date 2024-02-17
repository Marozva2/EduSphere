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

