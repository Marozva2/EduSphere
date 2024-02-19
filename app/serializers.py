from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from models import User, Lecturer

class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User


class LecturerSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Lecturer
