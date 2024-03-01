import React, { useState, useEffect } from "react";

const Course_Detail = ({ courseId }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      const response = await fetch(
        `http://127.0.0.1:5000/courses/${courseId}`
      );
      const data = await response.json();
      setCourse(data);
    }

    fetchCourse();
  }, [courseId]);

  return (
    <div>
      <h2>Course Detail</h2>
      {course ? (
        <div>
          <p>
            <strong>Course Id:</strong> {course.id}
          </p>
          <p>
            <strong>Course name:</strong> {course.course_name}
          </p>
          <p>
            <strong>Course code:</strong> {course.course_code}
          </p>
          <p>
            <strong>Department Id:</strong> {course.department_id}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Course_Detail;
