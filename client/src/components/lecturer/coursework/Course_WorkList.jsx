import React, { useState, useEffect } from "react";

const CourseWorkList = () => {
  const [courseWorkList, setCourseWorkList] = useState([]);

  useEffect(() => {
    async function fetchCourseWorkList() {
      try {
        const response = await fetch("http://127.0.0.1:5000/course_works");
        console.log(response);
        const data = await response.json();
        setCourseWorkList(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchCourseWorkList();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Course Work List</h2>
      <div className="grid grid-cols-3 gap-4">
        {courseWorkList.map((courseWork) => (
          <div
            key={courseWork.id}
            className="border border-gray-400 rounded p-4"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Thumbnail"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{courseWork.unit_id}</h3>
            <p className="mb-2">Score: {courseWork.score}</p>
            <p className="mb-2">Student ID: {courseWork.student_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseWorkList;
