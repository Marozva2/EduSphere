import React, { useState, useEffect } from "react";

function CourseEnrollmentList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/enrollments")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>My Courses</h1>
      <ul className="list-disc pl-5">
        {courses.map((course) => (
          <li key={course.course_id}>
            <span className="material-icons">book</span>
            <div>
              <h2>{course.course_id}</h2>
              <p>{course.enrollment_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseEnrollmentList;
