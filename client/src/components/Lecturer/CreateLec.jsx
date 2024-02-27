import React, { useState } from "react";

function LecturerCreate() {
  const [lectureTitle, setLectureTitle] = useState("");
  const [facultyId, setFacultyId] = useState("");
  const [datetime, setDatetime] = useState("");
  const [location, setLocation] = useState("");

  async function postLecturerData() {
    const response = await fetch("http://127.0.0.1:5000/lecturers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lecture_title: lectureTitle,
        facult_id: facultyId,
        datetime,
        location,
      }),
    });
    const data = await response.json();
    return data;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postLecturerData();
    alert("Added!!!");
  };

  return (
    <div className="ui raised segment">
      <h2 className="ui segment blue inverted">Add Lecture</h2>

      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input
            value={lectureTitle}
            onChange={(e) => setLectureTitle(e.target.value)}
            type="text"
            name="lecture_title"
            placeholder="Lecture Title"
          />
          <input
            value={facultyId}
            onChange={(e) => setFacultyId(e.target.value)}
            type="number"
            name="facult_id"
            placeholder="Faculty Id"
          />
          <input
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            type="date"
            name="datetime"
          />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            name="location"
            placeholder="Location"
          />
        </div>
        <button className="ui primary button" type="submit">
          Add Lecture
        </button>
      </form>
    </div>
  );
}

export default LecturerCreate;
