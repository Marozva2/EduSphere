from flask import Blueprint, jsonify, abort
from flask_restful import Api, Resource, reqparse
from models import Faculty, db
from serializers import FacultySchema


faculty_bp = Blueprint('faculty_bp', __name__)
api = Api(faculty_bp)


post_args = reqparse.RequestParser()
# post_args.add_argument('id', type=str, required=True,
#                        help='Id is required')
post_args.add_argument('name', type=str, required=True,
                       help='name is required')
post_args.add_argument('email', type=str, required=True,
                       help='email code is required')
post_args.add_argument('department_id', type=str,
                       required=True, help='Department is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('name', type=str)
patch_args.add_argument('email', type=str)
patch_args.add_argument('department_id', type=int)


faculty_schema = FacultySchema(many=True)
faculty_schema_single = FacultySchema()


class Faculties(Resource):
    def get(self):
        faculties = Faculty.query.all()
        result = faculty_schema.dump(faculties)

        return jsonify(result)

    def post(self):
        data = post_args.parse_args()

        faculties = Faculty.query.filter_by(id='id').first()
        if faculties:
            abort(409, detail=f"faculty with the same id already exists")

        new_faculty = Faculty(
            name=data['name'], email=data['email'], department_id=data['department_id'])
        db.session.add(new_faculty)
        db.session.commit()

        result = faculty_schema_single.dump(new_faculty)
        return result, 201


class FacultyById(Resource):
    def get(self, id):
        faculty = Faculty.query.get(id)
        if not faculty:
            abort(404, detail=f"faculty with id {id} doesn't exist")
        result = faculty_schema_single.dump(faculty)
        return jsonify(result)

    def patch(self, id):
        faculty = Faculty.query.get(id)
        if not faculty:
            abort(404, detail=f"faculty with {id} doesn't exist")
        data = patch_args.parse_args()
        for key, value in data.items():
            if value is not None:
                setattr(faculty, key, value)
        db.session.commit()

        result = faculty_schema_single.dump(faculty)
        return jsonify(result)

    def delete(self, id):
        faculty = Faculty.query.get(id)
        if not faculty:
            abort(404, detail=f"faculty with id {id} doesn't exist")

        db.session.delete(faculty)
        db.session.commit()
        return f'faculty with {id=} has been deleted.', 204


api.add_resource(Faculties, '/faculties')
api.add_resource(FacultyById, '/faculty/<string:id>')
