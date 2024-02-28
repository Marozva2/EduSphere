import React, { useState } from "react";

function SemesterCreate() {
  const [semester, setSemester] = useState({});

  async function postSemesterData() {
    const response = await fetch("http://127.0.0.1:5000/semesters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(semester),
    });
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setSemester({
      ...semester,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postSemesterData();
  };

  return (
    <div>
      <h2>Create semester</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleInputChange} />
        <input type="date" name="start_date" onChange={handleInputChange} />
        <input type="date" name="end_date" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SemesterCreate;
