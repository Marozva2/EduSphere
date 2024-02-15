# EduSphere University Management System

EduSphere is a comprehensive university management system built with Flask, SQLAlchemy, and Marshmallow. It provides functionalities for students, lecturers, and administrators to manage courses, units, exams, and more.

# Project Structure

The project is structured as follows:

`.
├── app
│   ├── app.py
│   ├── instance
│   │   └── edusphere.db
│   ├── migrations
│   ├── models.py
│   ├── routes
│   │   ├── auth.py
│   │   ├── students_bp.py
│   │   ├── lecturers_bp.py
│   │   ├── admins_bp.py
│   │   └── users_bp.py
│   ├── seed.py
│   └── serializers.py
├── Pipfile
├── Pipfile.lock
└── README.md`

# Models

In the models.py file, SQLAlchemy models are defined for each of the tables in the DBML schema. Each model has fields corresponding to the columns in its respective table.

# Serializers

In the serializers.py file, Marshmallow schemas are defined for each of the models. These schemas are used to serialize model instances into JSON for responses, and deserialize JSON data from requests into model instances.

# Routes

In the routes directory, there are Python files for each role (students, lecturers, admins). Each file contains a Flask blueprint with the routes for that role. The logic inside each route depends on the specific requirements of the university management system.

# Database Migrations

Flask-Migrate is used to handle database migrations. This allows the creation of database tables based on the SQLAlchemy models, and also updates the database schema if the models change in the future.

# Roles and Functionalities

The system provides different functionalities for students, lecturers, and administrators.

# Student Functionalities

- View and apply for courses
- Add, delete, and update course units
- View coursework
- Register for semesters
- View exam results
- Add and view fee payments
- View and download exam cards
- View and add extracurricular activities
- Enroll for a course

# Lecturer Functionalities

- Update and delete student coursework
- View assigned courses and units
- View assigned students
- Add examination score for units
- Add coursework for units
- Receive salary

# Admin Functionalities

- Add courses
- Add units
- Assign lecturers units
- Create semesters
- View fee payments
- Update fee payments
- Enroll students
- Manage users

# Getting Started

To get started with the development of this project, you’ll need to set up a Python environment and install the necessary dependencies. You can use pipenv for this:

`pip install pipenv`
`pipenv install`

Then, you can run the Flask application:

`flask run`

This will start the Flask development server, and you can access the application at `http://localhost:5000.`
