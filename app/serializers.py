from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from models import User,Course, CourseSemester, CourseWork



class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User

from marshmallow import Schema, fields



class CourseSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Course
        include_relationships = True
        load_instance = True



class CourseSemesterSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = CourseSemester
        include_relationships = True
        load_instance = True




class CourseWorkSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = CourseWork
        include_relationships = True
        load_instance = True
