import React, { useState, useEffect } from "react";

const Course_WorkDetail = ({ courseworkId }) => {
  const [courseWork, setCourseWork] = useState(null);

  useEffect(() => {
    async function fetchCourseWork() {
      const response = await fetch(
        `http://127.0.0.1:5000/course_work/${courseworkId}`
      );
      const data = await response.json();
      setCourseWork(data);
    }

    fetchCourseWork();
  }, [courseworkId]);

  return (
    <div>
      <h2>Course Work Detail</h2>
      {courseWork ? (
        <div>
          <p>
            <strong>Course_work Id:</strong> {courseWork.id}
          </p>
          <p>
            <strong>Unit id:</strong> {courseWork.unit_id}
          </p>
          <p>
            <strong>Student id:</strong> {courseWork.student_id}
          </p>
          <p>
            <strong>Score:</strong> {courseWork.score}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Course_WorkDetail;
