import React, { useState } from "react";

function LecturerCreate() {
  const [lecturer, setLecturer] = useState({});

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
      <h2>Create lecturer</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="text"
            name="lecturer_title"
            onChange={handleInputChange}
          />
          <input type="number" name="facult_id" onChange={handleInputChange} />
          <input type="date" name="datetime" onChange={handleInputChange} />
          <input type="text" name="location" onChange={handleInputChange} />
          <input type="text" name="thumbnail" onChange={handleInputChange} />
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LecturerCreate;
