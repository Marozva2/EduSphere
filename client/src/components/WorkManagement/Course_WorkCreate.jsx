import React, { useState } from "react";

const Course_WorkCreate = () => {
  const [courseWork, setCourseWork] = useState({});

  async function getCourseData() {
    const response = await fetch("http://127.0.0.1:5000/course_works");
    console.log(response);
    const data = await response.json();
    return data;
  }

  async function postCourseData() {
    const response = await fetch("http://127.0.0.1:5000/course_works", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseWork),
    });
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
    postCourseData();
  };

  return (
    <div>
      <h2>Create Course Work</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="course_name" onChange={handleInputChange} />
        <input type="number" name="unit_id" onChange={handleInputChange} />
        <input type="number" name="student_id" onChange={handleInputChange} />
        <input type="number" name="score" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Course_WorkCreate;

