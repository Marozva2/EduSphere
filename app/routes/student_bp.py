from flask import request
from flask_restful import Resource
from models import Course, CourseUnit, CourseWork, Semester, ExamResult, FeePayment, ExtraCurricularActivity
from serializers import CourseSchema, CourseUnitSchema, CourseWorkSchema, SemesterSchema, ExamResultSchema, FeePaymentSchema, ExtraCurricularActivitySchema

class CourseResource(Resource):
    def get(self):
        # Logic to get all available courses
        # You might use the Course model and CourseSchema here
        pass

    def post(self, course_id):
        # Logic to apply for a course
        # You might use the Course model and CourseSchema here
        pass

class CourseUnitResource(Resource):
    def post(self):
        # Logic to add a course unit
        # You might use the CourseUnit model and CourseUnitSchema here
        pass

    def delete(self, unit_id):
        # Logic to delete a course unit
        # You might use the CourseUnit model and CourseUnitSchema here
        pass

    def put(self, unit_id):
        # Logic to update a course unit
        # You might use the CourseUnit model and CourseUnitSchema here
        pass
