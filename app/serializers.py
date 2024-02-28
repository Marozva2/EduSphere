from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields

from models import User, Semester, Lecturer, Exam, Unit, Course, Department, Faculty, Student, CourseSemester, CourseWork, LecturerUnit, StudentCourses


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
    thumbnail = fields.Str()

    class Meta:
        model = Course
        include_fk = True


class DepartmentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Department


class FacultySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Faculty


class StudentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Student


class CourseSemesterSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = CourseSemester


class CourseWorkSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = CourseWork


class LecturerUnitschema(SQLAlchemyAutoSchema):
    class Meta:
        model = LecturerUnit


class StudentCourseSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = StudentCourses
