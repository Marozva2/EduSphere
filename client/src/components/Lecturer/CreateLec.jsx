import React, { useState } from "react";

const LecturerCreate = () => {
  const [lecturer, setLecturer] = useState({});

  async function getLecturerData() {
    const response = await fetch("http://127.0.0.1:5000/lectures");
    console.log(response);
    const data = await response.json();
    return data;
  }

  async function postLecturerData() {
    const response = await fetch("http://127.0.0.1:5000/lecturers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lecturer),
    });
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setLecturer({
      ...lecturer,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postLecturerData();
  };

  return (
    <div>
      <h2>Create Lecturer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="lecture_title" onChange={handleInputChange} />
        <input type="number" name="faculty_id" onChange={handleInputChange} />
        <input type="date" name="datetime" onChange={handleInputChange} />
        <input type="text" name="location" onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LecturerCreate;
