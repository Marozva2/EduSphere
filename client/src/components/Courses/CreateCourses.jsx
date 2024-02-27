import React, { useState } from "react";

const CreateCourses = () => {
  const [course, setCourse] = useState({});

  async function getCourseData() {
    const response = await fetch("http://127.0.0.1:5000/courses");
    const data = await response.json();
    return data;
  }

  async function postCourseData() {
    const response = await fetch("http://127.0.0.1:5000/courses", {
      method: "POST",
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
    postCourseData();
  };

  return (
    <div>
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleInputChange} />
        <input type="text" name="code" onChange={handleInputChange} />
        <input type="text" name="department_id" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCourses;
