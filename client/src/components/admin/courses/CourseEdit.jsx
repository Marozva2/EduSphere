import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";

function CourseEdit({ courseId }) {
  const [course, setCourse] = useState({});

  useEffect(() => {
    async function fetchCourse() {
      const response = await fetch(`http://127.0.0.1:5000/Course/${courseId}`);
      const data = await response.json();
      setCourse(data);
    }

    fetchCourse();
  }, [courseId]);

  async function updateCourse() {
    const response = await fetch(`http://127.0.0.1:5000/course/${courseId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
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
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields"></div>
        <input
          type="text"
          name="id"
          placeholder="course ID"
          value={course.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="course name"
          value={course.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="code"
          placeholder="code"
          value={course.code}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department_id"
          placeholder="department_id"
          value={course.department_id}
          onChange={handleInputChange}
        />
        <button className="ui primary button" type="submit">
          Submit
        </button>
      </form>
      <CourseList />
    </div>
  );
}

export default CourseEdit;
