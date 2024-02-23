import React, { useState, useEffect } from "react";

const Course_WorkEdit = ({ courseworkId }) => {
  const [courseWork, setCourseWork] = useState({});

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

  async function updateCourseWork() {
    const response = await fetch(
      `http://127.0.0.1:5000/course_work/${courseworkId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseWork),
      }
    );
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setCourseWork({
      ...courseWork,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCourseWork();
  };

  return (
    <div>
      <h2>Edit Course Work</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={courseWork.courseName}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="unit_id"
          value={courseWork.unit_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="student_id"
          value={courseWork.student_id}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="score"
          value={courseWork.score}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Course_WorkEdit;

