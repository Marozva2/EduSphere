import React, { useState, useEffect } from "react";

function CourseDetail({ courseId }) {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      const response = await fetch(`http://127.0.0.1:5000/course/${courseId}`);
      const data = await response.json();
      setCourse(data);
    }

    fetchCourse();
  }, [courseId]);

  return (
    <div>
      <h2>course Detail</h2>
      {course ? (
        <div>
          <p>
            <strong>course Id:</strong> {course.id}
          </p>
          <p>
            <strong>course Name:</strong> {course.name}
          </p>
          <p>
            <strong>Code:</strong> {course.code}
          </p>
          <p>
            <strong>Faculty Id:</strong> {course.department_id}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CourseDetail;
