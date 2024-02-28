import React, { useState } from "react";

function StudentCreate() {
  const [student, setStudent] = useState({});

  async function postStudentData() {
    const response = await fetch("http://127.0.0.1:5000/students", {
      method: "POST",
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
    postStudentData();
  };

  return (
    <div>
      <h2>Create student</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input placeholder="first name" type="text" name="first_name" onChange={handleInputChange} />
          <input placeholder="last name" type="text" name="last_name" onChange={handleInputChange} />
          <input placeholder="email" type="email" name="email" onChange={handleInputChange} />
          <input
            type="number"
            name="department_id"
            placeholder="department ID"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="profile_photo"
            placeholder="profile photo"
            onChange={handleInputChange}
          />
        </div>
        <button className="ui primary button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentCreate;
