import React, { useState, useEffect } from "react";

function StudentEdit({ studentId }) {
  const [student, setStudent] = useState({});

  useEffect(() => {
    async function fetchstudent() {
      const response = await fetch(
        `http://127.0.0.1:5000/student/${studentId}`
      );
      const data = await response.json();
      setStudent(data);
    }

    fetchstudent();
  }, [studentId]);

  async function updatestudent() {
    const response = await fetch(`http://127.0.0.1:5000/student/${studentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatestudent();
  };

  return (
    <div>
      <h2>Edit student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={student.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="first_name"
          value={student.first_name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="last_name"
          value={student.last_name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="name"
          value={student.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department_id"
          value={student.department_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="profile_photo"
          value={student.profile_photo}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentEdit;
