from models import User, db, Lecturer
from app import create_app
from datetime import datetime


app = create_app()


with app.app_context():
    users = [{
        "id": 1,
        "username": "frowlett0",
        "password": "aG0)%",
        "role": "Construction Expeditor",
        "created_at": "3/18/2023",
        "updated_at": "12/26/2023"
    }, {
        "id": 2,
        "username": "ibernaciak1",
        "password": "zZ9?y",
        "role": "Estimator",
        "created_at": "4/15/2023",
        "updated_at": "1/1/2024"
    }, {
        "id": 3,
        "username": "djosilowski2",
        "password": "qJ3)}h=",
        "role": "Estimator",
        "created_at": "8/8/2023",
        "updated_at": "8/27/2023"
    }, {
        "id": 4,
        "username": "kfoulcher3",
        "password": "wW9$ET0Z~",
        "role": "Construction Foreman",
        "created_at": "3/23/2023",
        "updated_at": "5/18/2023"
    }, {
        "id": 5,
        "username": "charroll4",
        "password": "lZ7_,\"!k_",
        "role": "Subcontractor",
        "created_at": "12/20/2023",
        "updated_at": "12/11/2023"
    }, {
        "id": 6,
        "username": "bedlin5",
        "password": "lL1,pTLU",
        "role": "Construction Manager",
        "created_at": "7/24/2023",
        "updated_at": "5/9/2023"
    }, {
        "id": 7,
        "username": "eberi6",
        "password": "uO0\"H&",
        "role": "Architect",
        "created_at": "7/15/2023",
        "updated_at": "11/10/2023"
    }, {
        "id": 8,
        "username": "esammut7",
        "password": "hM2@I}n",
        "role": "Subcontractor",
        "created_at": "3/13/2023",
        "updated_at": "3/6/2023"
    }, {
        "id": 9,
        "username": "dshires8",
        "password": "jK2\\YjKNE",
        "role": "Construction Worker",
        "created_at": "6/6/2023",
        "updated_at": "7/25/2023"
    }, {
        "id": 10,
        "username": "collington9",
        "password": "pC8%c&)I",
        "role": "Estimator",
        "created_at": "2/28/2023",
        "updated_at": "8/6/2023"
    }]

    # for user_data in users:
    #     user_data["created_at"] = datetime.strptime(
    #         user_data["created_at"], "%m/%d/%Y")
    #     user_data["updated_at"] = datetime.strptime(
    #         user_data["updated_at"], "%m/%d/%Y")

    #     user = User(**user_data)
    #     db.session.add(user)
    # db.session.commit()
    print("Users added!!!")


with app.app_context():
    lecturers = [
        {
            "id": 1,
            "lecture_title": "Introduction to Computer Science",
            "facult_id": 1,
            "datetime": "2023-03-18",
            "location": "Room A101"
        },
        {
            "id": 2,
            "lecture_title": "Advanced Mathematics",
            "facult_id": 2,
            "datetime": "2023-04-15",
            "location": "Room B203"
        },
        {
            "id": 3,
            "lecture_title": "Literature and Composition",
            "facult_id": 3,
            "datetime": "2023-05-20",
            "location": "Room C305"
        },
        {
            "id": 4,
            "lecture_title": "Chemistry Fundamentals",
            "facult_id": 4,
            "datetime": "2023-06-10",
            "location": "Room D102"
        },
        {
            "id": 5,
            "lecture_title": "History of Art",
            "facult_id": 5,
            "datetime": "2023-07-05",
            "location": "Room E204"
        },
        {
            "id": 6,
            "lecture_title": "Introduction to Business Management",
            "facult_id": 1,
            "datetime": "2023-08-12",
            "location": "Room A102"
        },
        {
            "id": 7,
            "lecture_title": "Environmental Science",
            "facult_id": 2,
            "datetime": "2023-09-18",
            "location": "Room B305"
        },
        {
            "id": 8,
            "lecture_title": "Psychology Basics",
            "facult_id": 3,
            "datetime": "2023-10-25",
            "location": "Room C401"
        },
        {
            "id": 9,
            "lecture_title": "Introduction to Physics",
            "facult_id": 4,
            "datetime": "2023-11-08",
            "location": "Room D203"
        },
        {
            "id": 10,
            "lecture_title": "Data Structures and Algorithms",
            "facult_id": 5,
            "datetime": "2023-12-15",
            "location": "Room E101"
        },
        {
            "id": 11,
            "lecture_title": "Digital Marketing Strategies",
            "facult_id": 1,
            "datetime": "2024-01-20",
            "location": "Room A301"
        },
        {
            "id": 12,
            "lecture_title": "Microeconomics",
            "facult_id": 2,
            "datetime": "2024-02-10",
            "location": "Room B102"
        },
        {
            "id": 13,
            "lecture_title": "Introduction to Sociology",
            "facult_id": 3,
            "datetime": "2024-03-05",
            "location": "Room C201"
        },
        {
            "id": 14,
            "lecture_title": "Artificial Intelligence Fundamentals",
            "facult_id": 4,
            "datetime": "2024-04-15",
            "location": "Room D304"
        },
        {
            "id": 15,
            "lecture_title": "Creative Writing Workshop",
            "facult_id": 5,
            "datetime": "2024-05-20",
            "location": "Room E403"
        },
    ]

    for lecturer_data in lecturers:
        lecturer_data["datetime"] = datetime.strptime(
            lecturer_data["datetime"], "%Y-%m-%d")

        lecturer = Lecturer(**lecturer_data)
        db.session.add(lecturer)

    db.session.commit()
    print("Added lecturers")
