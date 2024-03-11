from models import User, db, Lecturer, Course, Unit, Department, TokenBlocklist, Student, Fee
from app import create_app
from datetime import datetime
from models import generate_uuid


app = create_app()


def seed_database():
    with app.app_context():
        User.query.delete()
        Lecturer.query.delete()
        Course.query.delete()
        Unit.query.delete()
        Department.query.delete()
        Student.query.delete()
        TokenBlocklist.query.delete()
        Fee.query.delete()

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
            user_data["id"] = generate_uuid()
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
            unit["id"] = generate_uuid()

            unit = Unit(**unit)
            db.session.add(unit)
        db.session.commit()
        print("units added!!!")

        departments = [{
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
            department["id"] = generate_uuid()

            department = Department(**department)
            db.session.add(department)
        db.session.commit()
        print("departments added!!!")

        courses = [{
            "name": "PHP",
            "code": "PHP101",
            "department_id": 1,
            "thumbnail": "https://imgs.search.brave.com/g5QTlNMorg1PkLKTpfB5yM-R4h-VVyouXdg2fPVVjus/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9QSFAvUEhQ/LUxvZ28ud2luZS5z/dmc.svg"
        }, {
            "name": "C++",
            "code": "C101",
            "department_id": 2,
            "thumbnail": "https://imgs.search.brave.com/H1AAjMgU0punj1GIcp7XZY16iONu9l2_RsCU1OdkHg0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0lTT19DKytf/TG9nby5zdmc.svg"
        }, {
            "name": "JavaScript",
            "code": "JS101",
            "department_id": 3,
            "thumbnail": "https://imgs.search.brave.com/1KHVTFjU5z6qZSYdxOpcGW1Kc7KLTRMvMHrYcXN6NkA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9sb2dvLWphdmFz/Y3JpcHQuc3Zn.svg"
        }, {
            "name": "Java",
            "code": "Java101",
            "department_id": 4,
            "thumbnail": "https://imgs.search.brave.com/xU4z0qJbwmAEUZLYHMOnzpMo0xp-EjFXh2CHpMuAufs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuamF2YXRwb2lu/dC5jb20vY29yZS9p/bWFnZXMvamF2YS1s/b2dvMS5wbmc"
        }, {
            "name": "Python",
            "code": "PYT101",
            "department_id": 5,
            "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"
        }]

        for course in courses:
            course["id"] = generate_uuid()

            course = Course(**course)
            db.session.add(course)
        db.session.commit()
        print("courses added!!!")

        lecturers_data = [{

            "lecture_title": "A Fugitive from the Past",
            "facult_id": "Engineering",
            "datetime": "8/18/2023",
            "location": "Sherman",
            "thumbnail": "https://imgs.search.brave.com/jDdZh4oZ-PsdPW_j5U1PckQsmbBlKPfvqvfd0BEWfhk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9wZW9wbGVz/LWF2YXRhcnMvbWFu/LXVzZXItY2lyY2xl/LWljb24uc3Zn.svg"
        }, {

            "lecture_title": "In the Soup",
            "facult_id": "Accounting",
            "datetime": "7/20/2023",
            "location": "Wayridge",
            "thumbnail": "https://imgs.search.brave.com/jDdZh4oZ-PsdPW_j5U1PckQsmbBlKPfvqvfd0BEWfhk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9wZW9wbGVz/LWF2YXRhcnMvbWFu/LXVzZXItY2lyY2xl/LWljb24uc3Zn.svg"
        }, {

            "lecture_title": "One Point O",
            "facult_id": "Engineering",
            "datetime": "1/18/2024",
            "location": "Mccormick",
            "thumbnail": "https://imgs.search.brave.com/jDdZh4oZ-PsdPW_j5U1PckQsmbBlKPfvqvfd0BEWfhk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9wZW9wbGVz/LWF2YXRhcnMvbWFu/LXVzZXItY2lyY2xl/LWljb24uc3Zn.svg"
        }]

        lecturers = []
        for lecturer_info in lecturers_data:
            lecturer_info["id"] = generate_uuid()

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
            "profile_photo": "https://imgs.search.brave.com/DThx0fvD_PDWp7PnNGyyV3Vk-L50Vk7jdrt9WBCRKco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9wZW9wbGVz/LWF2YXRhcnMvbWFu/LXVzZXItY2lyY2xl/LWljb24uc3Zn.svg"
        }, {
            "first_name": "Jen",
            "last_name": "Attwool",
            "email": "jattwool1@comsenz.com",
            "department_id": "2",
            "profile_photo": "https://imgs.search.brave.com/DThx0fvD_PDWp7PnNGyyV3Vk-L50Vk7jdrt9WBCRKco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9wZW9wbGVz/LWF2YXRhcnMvbWFu/LXVzZXItY2lyY2xl/LWljb24uc3Zn.svg"
        }, {
            "first_name": "Jerri",
            "last_name": "Moralee",
            "email": "jmoralee2@salon.com",
            "department_id": "3",
            "profile_photo": "https://imgs.search.brave.com/DThx0fvD_PDWp7PnNGyyV3Vk-L50Vk7jdrt9WBCRKco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9wZW9wbGVz/LWF2YXRhcnMvbWFu/LXVzZXItY2lyY2xl/LWljb24uc3Zn.svg"
        }]

        for student in students:
            student["id"] = generate_uuid()
            token = Student(**student)
            db.session.add(token)
        db.session.commit()
        print("Student added!!!")

        fees = [{
            "amount": 4196.4,
        }, {
            "amount": 3849.76,
        }, {
            "amount": 3452.32,
        }, {
            "amount": 2621.97,
        }, {
            "amount": 4954.32,
        }]

        for fee in fees:
            fee["id"] = generate_uuid()
            fee["student_id"] = generate_uuid()
            token = Fee(**fee)
            db.session.add(token)
        db.session.commit()
        print("Fee added!!!")


if __name__ == "__main__":
    seed_database()
