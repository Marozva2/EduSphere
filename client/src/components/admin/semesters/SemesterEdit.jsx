import React, { useState, useEffect } from "react";

function SemesterEdit({ semesterId }) {
  const [semester, setSemester] = useState({});

  useEffect(() => {
    async function fetchSemester() {
      const response = await fetch(
        `http://127.0.0.1:5000/semester/${semesterId}`
      );
      const data = await response.json();
      setSemester(data);
    }

    fetchSemester();
  }, [semesterId]);

  async function updateSemester() {
    const response = await fetch(
      `http://127.0.0.1:5000/semester/${semesterId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(semester),
      }
    );
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
    updateSemester();
  };

  return (
    <div>
      <h2>Edit semester</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={semester.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          value={semester.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="start_date"
          value={semester.start_date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="end_date"
          value={semester.end_date}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SemesterEdit;
