from models import User, db, Course, Admin
from app import create_app
from datetime import datetime


app = create_app()
   

with app.app_context():
    courses = [
        # {
        #     "id": 1,
        #     "course_name": "JavaScript Native",
        #     "course_code": "JS 001",
        #     "department_id": "tech/001/2"  
        # },
        {
            "id":2,
            "course_name":"React Js",
            "course_code":"JS 002",
            "department_id":"tech/002/2"
        },
        {
             "id":3,
            "course_name":"Angular",
            "course_code":"A 002",
            "department_id":"tech/003/2"            
        },
        {
             "id":4,
            "course_name":"python",
            "course_code":"P 003",
            "department_id":"tech/003/1"
        },
        {
             "id":5,
            "course_name":"flask-python",
            "course_code":"P 004",
            "department_id":"tech/003/1"
        }
    ]
    for course_data in courses:
        course = Course(**course_data)
        db.session.add(course)
    db.session.commit()
    print("Courses added!!!")

    


 

    
