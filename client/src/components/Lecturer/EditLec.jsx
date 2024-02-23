import React, { useState, useEffect } from "react";

const LecEdit = ({ lecturerId }) => {
  const [lecturer, setLec] = useState({});

  useEffect(() => {
    async function fetchlecturer() {
      const response = await fetch(
        `http://127.0.0.1:5000/lecturer/${lecturerId}`
      );
      const data = await response.json();
      setLec(data);
    }

    fetchlecturer();
  }, [lecturerId]);

  async function updateLecturer() {
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
    setLec({
      ...lecturer,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLecturer();
  };

  return (
    <div>
      <h2>Edit Lecturer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={lecturer.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lecture_title"
          value={lecturer.lecture_title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="faculty_id"
          value={lecturer.faculty_id}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="datetime"
          value={lecturer.datetime}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          value={lecturer.location}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LecEdit;
