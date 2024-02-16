from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from models import User, Semester, Lecturer, Exam, Unit, Course, Department, Faculty


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User


class SemesterSchema(SQLAlchemyAutoSchema):

    class Meta:
        model = Semester


class LecturerSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Lecturer


class ExamSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Exam


class UnitSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Unit


class CourseSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Course


class DepartmentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Department


class FacultySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Faculty
