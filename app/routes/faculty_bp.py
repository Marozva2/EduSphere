# ----------------- Jerry Tarus -----------------
from flask import Blueprint, jsonify, abort
from flask_restful import Api, Resource, reqparse
from models import Faculty, db
from serializers import FacultySchema


faculty_bp = Blueprint('faculty_bp', __name__)
api = Api(faculty_bp)

# Request parsers for POST and PATCH requests
post_args = reqparse.RequestParser()
post_args.add_argument('id', type=str, required=True, help='Id is required')
post_args.add_argument('name', type=str, required=True, help='name is required')
post_args.add_argument('email', type=str, required=True, help='email code is required')
post_args.add_argument('department_id', type=int, required=True, help='Department is required')
patch_args = reqparse.RequestParser()
patch_args.add_argument('name', type=str)
patch_args.add_argument('email', type=str)
patch_args.add_argument('department_id', type=int)

# Init FacultySchema for serialization
faculty_schema = FacultySchema(many=True)
faculty_schema_single = FacultySchema()

