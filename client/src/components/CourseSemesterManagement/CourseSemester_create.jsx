import React, { useState } from "react";

const CourseSemester_Create = () => {
  const [courseSemester, setCourseSemester] = useState({});

  async function getCourseData() {
    const response = await fetch("http://127.0.0.1:5000/course-semesters");
    console.log(response);
    const data = await response.json();
    return data;
  }

  async function postCourseData() {
    const response = await fetch("http://127.0.0.1:5000/course-semesters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseSemester),
    });
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setCourseSemester({
      ...courseSemester,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCourseData();
  };

  return (
    <div>
      <h2>Create CourseSemester</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="coursesemester_name" onChange={handleInputChange} />
        <input type="number" name="course_id" onChange={handleInputChange} />
        <input type="number" name="coursesemester_id" onChange={handleInputChange} />       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseSemester_Create;
