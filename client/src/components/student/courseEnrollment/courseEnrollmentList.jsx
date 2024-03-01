import React, { useState, useEffect } from "react";
import { List } from "semantic-ui-react";

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
      <List>
        {courses.map((course) => (
          <List.Item key={course.course_id}>
            <List.Icon name="book" />
            <List.Content>
              <List.Header>{course.course_id}</List.Header>
              <List.Description>{course.enrollment_date}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default CourseEnrollmentList;
