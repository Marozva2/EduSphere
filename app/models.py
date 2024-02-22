from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    username = db.Column(db.String(50))
    password = db.Column(db.String(50))
    role = db.Column(db.String(50))
    created_at = db.Column(
        db.TIMESTAMP, server_default=db.func.current_timestamp())
    updated_at = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())


class Student(db.Model):
    __tablename__ = 'students'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String)
    department_id = db.Column(db.String(36), db.ForeignKey('departments.id'))
    profile_photo = db.Column(db.String(100))


class Admin(db.Model):
    __tablename__ = 'admin'

    id = db.Column(db.String(36), db.ForeignKey('users.id'), primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(100))


class Department(db.Model):

    __tablename__ = 'departments'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    department_name = db.Column(db.String(100))
    faculty_id = db.Column(db.String(36), db.ForeignKey('faculties.id'))


class Faculty(db.Model):
    __tablename__ = 'faculties'

    id = db.Column(db.String(36), db.ForeignKey('users.id'), primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(100))
    department_id = db.Column(db.String(36), db.ForeignKey('departments.id'))


class Semester(db.Model):
    __tablename__ = 'semesters'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    name = db.Column(db.String)
    start_date = db.Column(db.DATE)
    end_date = db.Column(db.DATE)


class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    course_name = db.Column(db.String)
    course_code = db.Column(db.String)
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))


class CourseSemester(db.Model):
    __tablename__ = 'course_semester'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    semester_id = db.Column(db.Integer, db.ForeignKey('semesters.id'))


class Lecturer(db.Model):
    __tablename__ = 'lecturers'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    lecture_title = db.Column(db.String)
    facult_id = db.Column(db.Integer, db.ForeignKey('faculties.id'))
    datetime = db.Column(
        db.TIMESTAMP, server_default=db.func.current_timestamp())
    location = db.Column(db.String)


class LecturerUnit(db.Model):
    __tablename__ = 'lecturer_unit'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    lecturer_id = db.Column(db.String(36), db.ForeignKey('faculties.id'))
    unit_id = db.Column(db.String(36), db.ForeignKey('units.id'))


class CourseWork(db.Model):
    __tablename__ = 'course_work'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    unit_id = db.Column(db.Integer, db.ForeignKey('units.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    score = db.Column(db.Float)


class Exam(db.Model):
    __tablename__ = 'exams'

    unit_id = db.Column(db.String(36), primary_key=True,
                        default=str(uuid.uuid4()))
    score = db.Column(db.Float)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    grade = db.Column(db.String)


class Unit(db.Model):
    __tablename__ = 'units'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    unit_code = db.Column(db.String(36))
    name = db.Column(db.String(100))
    passmark = db.Column(db.Float)
    course_id = db.Column(db.String(36), db.ForeignKey('courses.id'))
    contact_hours = db.Column(db.Float)


class StudentCourses(db.Model):
    __tablename__ = 'student_courses'

    id = db.Column(db.String(36), primary_key=True, default=str(uuid.uuid4()))
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))

