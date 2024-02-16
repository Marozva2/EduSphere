from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from models import User, Semester, Lecturer, Exam, Unit


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
