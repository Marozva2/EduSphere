import React, { useState, useEffect } from "react";

const Course_Edit = ({ courseId }) => {
  const [course, setCourse] = useState({});

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

  async function updateCourse() {
    const response = await fetch(
      `http://127.0.0.1:5000/courses/${courseId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      }
    );
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCourse();
  };

  return (
    <div>
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={course.courseName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_name"
          value={course.course_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_code"
          value={course.course_code}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department_id"
          value={course.department_id}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Course_Edit;
