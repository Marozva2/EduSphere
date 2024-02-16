
from flask import Blueprint, jsonify
from flask_restful import Api, Resource, abort, reqparse,request
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from models import Student, db  
from serializers import UserSchema
from app import create_app
app = create_app




student_bp = Blueprint('student_bp', __name__)
ma = Marshmallow(student_bp)
bcrypt = Bcrypt()
api = Api(student_bp)


post_args = reqparse.RequestParser()
post_args.add_argument('id', type=int, required=True, help='ID is required')
post_args.add_argument('username', type=str, required=True, help='Username is required')
post_args.add_argument('password', type=str, required=True, help='Password is required')
post_args.add_argument('created_at', type=str, required=True, help='Created_at is required')
post_args.add_argument('updated_at', type=str, required=True, help='Updated_at is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('username', type=str)
patch_args.add_argument('password', type=str)
patch_args.add_argument('created_at', type=str)
patch_args.add_argument('updated_at', type=str)

# Dummy data 
courses = {
    'C001': {'name': 'Computer Science', 'description': 'Introduction to Computer Science', 'units': []},
    'C002': {'name': 'Mathematics', 'description': 'Introduction to Mathematics', 'units': []},
    'C003': {'name': 'Physics', 'description': 'Basic Physics Concepts', 'units': []},
    'C004': {'name': 'Biology', 'description': 'Fundamentals of Biology', 'units': []},
    'C005': {'name': 'Chemistry', 'description': 'Introduction to Chemistry', 'units': []},
    'C006': {'name': 'English Literature', 'description': 'Literary Analysis', 'units': []},
    'C007': {'name': 'History', 'description': 'World History', 'units': []},
    'C008': {'name': 'Economics', 'description': 'Principles of Economics', 'units': []},
    'C009': {'name': 'Psychology', 'description': 'Introduction to Psychology', 'units': []},
    'C010': {'name': 'Sociology', 'description': 'Fundamentals of Sociology', 'units': []},
    'C011': {'name': 'Art History', 'description': 'Survey of Art History', 'units': []},
    'C012': {'name': 'Music Theory', 'description': 'Fundamentals of Music Theory', 'units': []},
    'C013': {'name': 'Geography', 'description': 'Introduction to Geography', 'units': []},
    'C014': {'name': 'Political Science', 'description': 'Introduction to Political Science', 'units': []},
    'C015': {'name': 'Environmental Science', 'description': 'Understanding the Environment', 'units': []},
    'C016': {'name': 'Anthropology', 'description': 'Introduction to Anthropology', 'units': []},
    'C017': {'name': 'Philosophy', 'description': 'Introduction to Philosophy', 'units': []},
    'C018': {'name': 'Foreign Language - Spanish', 'description': 'Basic Spanish Language Skills', 'units': []},
    'C019': {'name': 'Foreign Language - French', 'description': 'Basic French Language Skills', 'units': []},
    'C020': {'name': 'Health Education', 'description': 'Health and Wellness Concepts', 'units': []}
    
}

students = []
coursework = {}
exam_results = {}
fee_payments = []
exam_card = {}
extra_curricular_activities = []

# View all available courses
@app.route('/courses', methods=['GET'])
def get_courses():
    return jsonify(courses)

# View details of a specific course
@app.route('/courses/<course_id>', methods=['GET'])
def get_course(course_id):
    if course_id in courses:
        return jsonify(courses[course_id])
    else:
        return jsonify({'error': 'Course not found'}), 404

# Apply for a specific course
@app.route('/apply/<course_id>', methods=['POST'])
def apply_course(course_id):
    # Implementation for applying to a course
    data = request.get_json()
    student_id = data.get('student_id')  # assuming student_id is provided in request
    if student_id is None:
        return jsonify({'error': 'Student ID not provided'}), 400
    # Add logic to check if student_id exists and process the application
    return jsonify({'message': f'Applied for course {course_id} successfully'})

# Add a new unit to the course
@app.route('/courses/<course_id>/units', methods=['POST'])
def add_unit(course_id):
    # Implementation for adding a new unit to the course
    data = request.get_json()
    unit_id = data.get('unit_id')
    if unit_id is None:
        return jsonify({'error': 'Unit ID not provided'}), 400
    courses[course_id]['units'].append(unit_id)
    return jsonify({'message': 'Unit added successfully'})

# Delete a unit from the course
@app.route('/courses/<course_id>/units/<unit_id>', methods=['DELETE'])
def delete_unit(course_id, unit_id):
    # Implementation for deleting a unit from the course
    if unit_id in courses[course_id]['units']:
        courses[course_id]['units'].remove(unit_id)
        return jsonify({'message': 'Unit deleted successfully'})
    else:
        return jsonify({'error': 'Unit not found in course'}), 404

# Update details of a unit in the course
@app.route('/courses/<course_id>/units/<unit_id>', methods=['PUT'])
def update_unit(course_id, unit_id):
    # Implementation for updating details of a unit in the course
    data = request.get_json()
    # Update logic here
    return jsonify({'message': 'Unit updated successfully'})

# View all coursework for a specific course
@app.route('/courses/<course_id>/coursework', methods=['GET'])
def get_coursework(course_id):
    # Implementation for viewing coursework
    if course_id in coursework:
        return jsonify(coursework[course_id])
    else:
        return jsonify({'error': 'Coursework not found for course'}), 404

# Register for a semester
@app.route('/register/semester', methods=['POST'])
def register_semester():
    # Implementation for registering for a semester
    return jsonify({'message': 'Registered for semester successfully'})

# View exam results
@app.route('/results', methods=['GET'])
def get_results():
    # Implementation for viewing exam results
    return jsonify(exam_results)

# Add a new fee payment
@app.route('/payment', methods=['POST'])
def add_payment():
    # Implementation for adding a new fee payment
    data = request.get_json()
    # Add validation and processing logic here
    fee_payments.append(data)
    return jsonify({'message': 'Payment added successfully'})

# View fee payment history
@app.route('/payment', methods=['GET'])
def get_payment_history():
    # Implementation for viewing fee payment history
    return jsonify(fee_payments)

# View exam card details
@app.route('/examcard', methods=['GET'])
def get_exam_card():
    # Implementation for viewing exam card details
    return jsonify(exam_card)

# Download exam card
@app.route('/examcard/download', methods=['GET'])
def download_exam_card():
    # Implementation for downloading exam card
    # Return file or stream here
    return jsonify({'message': 'Exam card downloaded successfully'})

# View extra-curricular activities
@app.route('/activities', methods=['GET'])
def get_activities():
    # Implementation for viewing extra-curricular activities
    return jsonify(extra_curricular_activities)

# Add a new extra-curricular activity
@app.route('/activities', methods=['POST'])
def add_activity():
    # Implementation for adding a new extra-curricular activity
    data = request.get_json()
    # Add validation and processing logic here
    extra_curricular_activities.append(data)
    return jsonify({'message': 'Activity added successfully'})

# Enroll for a course
@app.route('/enroll', methods=['POST'])
def enroll_course():
    # Implementation for enrolling for a course
    data = request.get_json()
    # Add validation and processing logic here
    students.append(data)
    return jsonify({'message': 'Enrolled for course successfully'})

# if __name__ == '__main__':
#     app.run(debug=True)
