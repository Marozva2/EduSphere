import React, { useState, useEffect } from "react";
import LecturerList from "./LecturerList";

function LecturerEdit({ lecturerId }) {
  const [lecturer, setLecturer] = useState({});

  useEffect(() => {
    async function fetchLecturer() {
      const response = await fetch(
        `http://127.0.0.1:5000/lecturer/${lecturerId}`
      );
      const data = await response.json();
      setLecturer(data);
    }

    fetchLecturer();
  }, [lecturerId]);

  async function updatelecturer() {
    const response = await fetch(
      `http://127.0.0.1:5000/lecturer/${lecturerId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lecturer),
      }
    );
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
    updatelecturer();
  };

  return (
    <div>
      <h2>Edit lecturer</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="number"
            name="id"
            placeholder="ID"
            value={lecturer.id}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="lecture_title"
            placeholder="lecture_title"
            value={lecturer.lecture_title}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="facult_id"
            placeholder="facult_id"
            value={lecturer.facult_id}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="datetime"
            placeholder="datetime"
            value={lecturer.datetime}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="location"
            value={lecturer.location}
            onChange={handleInputChange}
          />
        </div>

        <button className="ui primary button" type="submit">
          Submit
        </button>
      </form>
      <LecturerList />
    </div>
  );
}

export default LecturerEdit;
