from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

<<<<<<< HEAD
from models import User,Course, CourseSemester, CourseWork

=======
from models import User, Semester, Lecturer, Exam, Unit, Course, Department, Faculty, Student, CourseSemester, CourseWork, LecturerUnit, StudentCourses
>>>>>>> main


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User

<<<<<<< HEAD
from marshmallow import Schema, fields

=======

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
>>>>>>> main


class CourseSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Course
<<<<<<< HEAD
        include_relationships = True
        load_instance = True


=======


class DepartmentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Department


class FacultySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Faculty


class StudentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Student

>>>>>>> main

class CourseSemesterSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = CourseSemester
<<<<<<< HEAD
        include_relationships = True
        load_instance = True


=======
>>>>>>> main


class CourseWorkSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = CourseWork
<<<<<<< HEAD
        include_relationships = True
        load_instance = True
=======

class LecturerUnitschema(SQLAlchemyAutoSchema):
    class Meta:
        model = LecturerUnit

class StudentCourseSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = StudentCourses
>>>>>>> main
