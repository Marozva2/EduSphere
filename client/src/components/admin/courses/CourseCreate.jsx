import React, { useState } from "react";

const CreateCourses = () => {
  const [course, setCourse] = useState({});

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
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="code"
            name="code"
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="department_id"
            name="department_id"
            onChange={handleInputChange}
          />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCourses;
