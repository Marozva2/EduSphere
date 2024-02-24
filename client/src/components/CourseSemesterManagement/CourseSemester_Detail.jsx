import React, { useState, useEffect } from "react";

const CourseSemester_Detail = ({ coursesemesterId }) => {
  const [courseSemester, setCourseSemester] = useState(null);

  useEffect(() => {
    async function fetchCourseWork() {
      const response = await fetch(
        `http://127.0.0.1:5000/course-semesters/${coursesemesterId}`
      );
      const data = await response.json();
      setCourseSemester(data);
    }

    fetchCourseSemester();
  }, [coursesemesterId]);

  return (
    <div>
      <h2>CourseSemester Detail</h2>
      {courseSemester ? (
        <div>
          <p>
            <strong>CourseSemester Id:</strong> {courseSemester.id}
          </p>
          <p>
            <strong>Course id:</strong> {courseSemester.course_id}
          </p>
          <p>
            <strong>CourseSemester id:</strong> {courseSemester.semester_id}
          </p>         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CourseSemester_Detail;
