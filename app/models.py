from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid

db = SQLAlchemy()


def generate_uuid():
    return str(uuid.uuid4())


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    username = db.Column(db.String(50))
    password = db.Column(db.String(50))
    role = db.Column(db.String(50))
    email = db.Column(db.String)
    created_at = db.Column(
        db.TIMESTAMP, server_default=db.func.current_timestamp())


class Student(db.Model):
    __tablename__ = 'students'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String)
    department_id = db.Column(db.String(36), db.ForeignKey('departments.id'))
    profile_photo = db.Column(db.String(100))
    fees = db.relationship('FeeResource', backref='student')


class Admin(db.Model):
    __tablename__ = 'admin'

    id = db.Column(db.String(36), db.ForeignKey('users.id'), primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(100))
    password = db.Column(db.String(50))


class Department(db.Model):

    __tablename__ = 'departments'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String(100))
    faculty_id = db.Column(db.String(36), db.ForeignKey('faculties.id'))

    __table_args__ = (
        db.ForeignKeyConstraint(
            ['faculty_id'], ['faculties.id'], name='fk_department_faculty'),
    )


class Faculty(db.Model):
    __tablename__ = 'faculties'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String(50))


class Semester(db.Model):
    __tablename__ = 'semesters'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String)
    start_date = db.Column(db.DateTime, default=datetime.utcnow)
    end_date = db.Column(db.DateTime)


class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String)
    code = db.Column(db.String)
    thumbnail = db.Column(db.String)
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))


class CourseSemester(db.Model):
    __tablename__ = 'course_semester'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    semester_id = db.Column(db.Integer, db.ForeignKey('semesters.id'))


class Lecturer(db.Model):
    __tablename__ = 'lecturers'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    lecture_title = db.Column(db.String)
    facult_id = db.Column(db.Integer, db.ForeignKey('faculties.id'))
    datetime = db.Column(db.DateTime)
    location = db.Column(db.String)


class LecturerUnit(db.Model):
    __tablename__ = 'lecturer_unit'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    lecturer_id = db.Column(db.String(36), db.ForeignKey('faculties.id'))
    unit_id = db.Column(db.String(36), db.ForeignKey('units.id'))


class CourseWork(db.Model):
    __tablename__ = 'course_work'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    unit_id = db.Column(db.Integer, db.ForeignKey('units.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    score = db.Column(db.Float)


class Exam(db.Model):
    __tablename__ = 'exams'

    unit_id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    score = db.Column(db.Float)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    grade = db.Column(db.String)


class Unit(db.Model):
    __tablename__ = 'units'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    unit_code = db.Column(db.String(36))
    name = db.Column(db.String(100))
    passmark = db.Column(db.Float)
    course_id = db.Column(db.String(36), db.ForeignKey('courses.id'))
    contact_hours = db.Column(db.Float)


class StudentCourses(db.Model):
    __tablename__ = 'student_courses'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))


class FeeResource(db.Model):
    __tablename__ = 'fees'

    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    amount = db.Column(db.String)
    student_id = db.Column(db.String, db.ForeignKey('students.id'))


class TokenBlocklist(db.Model):
    __tablename__ = 'tokenblocklist'
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, index=True)
    created_at = db.Column(db.DateTime, nullable=False)
