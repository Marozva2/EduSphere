from models import User, db, Lecturer, Course, Unit, Department, TokenBlocklist, Student
from app import create_app
from datetime import datetime


app = create_app()


def seed_database():
    with app.app_context():
        User.query.delete()
        Lecturer.query.delete()
        Course.query.delete()
        Unit.query.delete()
        Department.query.delete()
        TokenBlocklist.query.delete()

        users = [{

            "username": "frowlett0",
            "password": "aG0)%",
            "role": "Admin",
            "created_at": "3/18/2023"
        }, {

            "username": "ibernaciak1",
            "password": "zZ9?y",
            "role": "Student",
            "created_at": "4/15/2023"
        }, {

            "username": "djosilowski2",
            "password": "qJ3)}h=",
            "role": "Lecturer",
            "created_at": "8/8/2023"

        }]

        for user_data in users:
            user_data["created_at"] = datetime.strptime(
                user_data["created_at"], "%m/%d/%Y")

            user = User(**user_data)
            db.session.add(user)
        db.session.commit()
        print("Users added!!!")

        units = [{

            "unit_code": "AWB",
            "name": "Roomm",
            "passmark": 41.62,
            "course_id": 1,
            "contact_hours": 57.05
        }, {

            "unit_code": "LYU",
            "name": "Devshare",
            "passmark": 46.59,
            "course_id": 2,
            "contact_hours": 55.69
        }, {

            "unit_code": "XAB",
            "name": "Viva",
            "passmark": 69.53,
            "course_id": 3,
            "contact_hours": 32.86
        }]
        for unit in units:

            unit = Unit(**unit)
            db.session.add(unit)
        db.session.commit()
        print("units added!!!")

        departments = [{
            "id": 1,
            "name": "Sawayn, Gleason and Tillman",
            "faculty_id": 1
        }, {

            "name": "Lowe Group",
            "faculty_id": 2
        }, {

            "name": "Bogan Inc",
            "faculty_id": 3
        }]

        for department in departments:

            department = Department(**department)
            db.session.add(department)
        db.session.commit()
        print("departments added!!!")

        courses = [{
            "name": "Twitterlist",
            "code": "AGGF",
            "department_id": 1,
            "thumbnail": "http://dummyimage.com/114x100.png/dddddd/000000"
        }, {
            "name": "Realmix",
            "code": "WBKK",
            "department_id": 2,
            "thumbnail": "http://dummyimage.com/187x100.png/ff4444/ffffff"
        }, {
            "name": "Youfeed",
            "code": "FZSA",
            "department_id": 3,
            "thumbnail": "http://dummyimage.com/222x100.png/ff4444/ffffff"
        }, {
            "name": "Kaymbo",
            "code": "KPOE",
            "department_id": 4,
            "thumbnail": "http://dummyimage.com/206x100.png/cc0000/ffffff"
        }, {
            "name": "Zoonder",
            "code": "FMMI",
            "department_id": 5,
            "thumbnail": "http://dummyimage.com/153x100.png/cc0000/ffffff"
        }]

        for course in courses:

            course = Course(**course)
            db.session.add(course)
        db.session.commit()
        print("courses added!!!")

        lecturers_data = [{

            "lecture_title": "A Fugitive from the Past",
            "facult_id": "Engineering",
            "datetime": "8/18/2023",
            "location": "Sherman"
        }, {

            "lecture_title": "In the Soup",
            "facult_id": "Accounting",
            "datetime": "7/20/2023",
            "location": "Wayridge"
        }, {

            "lecture_title": "One Point O",
            "facult_id": "Engineering",
            "datetime": "1/18/2024",
            "location": "Mccormick"
        }]

        lecturers = []
        for lecturer_info in lecturers_data:

            lecturer_info["datetime"] = datetime.strptime(
                lecturer_info["datetime"], "%m/%d/%Y")

            lecturer = Lecturer(**lecturer_info)
            lecturers.append(lecturer)
            db.session.add(lecturer)
        db.session.commit()
        print("lecturers added!!!")

        token_blocklist_data = [
            {"jti": "token 1", "created_at": datetime.utcnow()},
            {"jti": "token 2", "created_at": datetime.utcnow()}
        ]

        for token_info in token_blocklist_data:
            token = TokenBlocklist(**token_info)
            db.session.add(token)
        db.session.commit()
        print("Tokens added!!!")

        students = [{
            "first_name": "Garv",
            "last_name": "Colleford",
            "email": "gcolleford0@baidu.com",
            "department_id": "1",
            "profile_photo": "http://dummyimage.com/163x100.png/ff4444/ffffff"
        }, {
            "first_name": "Jen",
            "last_name": "Attwool",
            "email": "jattwool1@comsenz.com",
            "department_id": "2",
            "profile_photo": "http://dummyimage.com/176x100.png/cc0000/ffffff"
        }, {
            "first_name": "Jerri",
            "last_name": "Moralee",
            "email": "jmoralee2@salon.com",
            "department_id": "3",
            "profile_photo": "http://dummyimage.com/185x100.png/ff4444/ffffff"
        }]

        for student in students:
            token = Student(**student)
            db.session.add(token)
        db.session.commit()
        print("Student added!!!")


if __name__ == "__main__":
    seed_database()
