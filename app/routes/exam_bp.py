from flask import request, jsonify, Blueprint

# Assuming you have already initialized your Flask app
app = Flask(__name__)

# Define the blueprint
exam_bp = Blueprint('exam_bp', __name__)

# Dummy data for exam result
exam_results = {}

# Route for submitting exam results
@exam_bp.route('/exams/submit', methods=['POST'])
def submit_exam_results():
    data = request.json  # Assuming JSON data is sent in the request body
    exam_id = data.get('exam_id')
    student_id = data.get('student_id')
    score = data.get('score')

    if not exam_id or not student_id or not score:
        return jsonify({'error': 'Incomplete data provided'}), 400

    # Store exam results
    exam_results[exam_id] = {'student_id': student_id, 'score': score}

    return jsonify({'message': 'Exam results submitted successfully'})

# Route for retrieving exam results for a specific student
@exam_bp.route('/exams/results/<student_id>', methods=['GET'])
def get_exam_results(student_id):
    student_results = [result for result in exam_results.values() if result['student_id'] == student_id]
    if not student_results:
        return jsonify({'error': 'No exam results found for the student'}), 404

    return jsonify({'exam_results': student_results})

# Route for retrieving exam results for all students
@exam_bp.route('/exams/results', methods=['GET'])
def get_all_exam_results():
    return jsonify(exam_results)

# Route for updating exam results
@exam_bp.route('/exams/update/<exam_id>', methods=['PUT'])
def update_exam_results(exam_id):
    data = request.json  # Assuming JSON data is sent in the request body
    new_score = data.get('score')

    if exam_id not in exam_results:
        return jsonify({'error': 'Exam ID not found'}), 404

    exam_results[exam_id]['score'] = new_score
    return jsonify({'message': f'Exam results for {exam_id} updated successfully'})

# Route for deleting exam results
@exam_bp.route('/exams/delete/<exam_id>', methods=['DELETE'])
def delete_exam_results(exam_id):
    if exam_id not in exam_results:
        return jsonify({'error': 'Exam ID not found'}), 404

    del exam_results[exam_id]
    return jsonify({'message': f'Exam results for {exam_id} deleted successfully'})

# Register the blueprint with the Flask app
app.register_blueprint(exam_bp)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
