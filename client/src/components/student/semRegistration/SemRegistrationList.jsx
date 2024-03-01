import React, { useState } from "react";

function SemesterRegistration() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const semesterData = {
      name: name,
      start_date: startDate,
      end_date: endDate,
    };

    fetch("http://127.0.0.1:5000/semesters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(semesterData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
        setName("");
        setStartDate("");
        setEndDate("");
        alert("Registration successful!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Semester Registration</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <label>
            Name:
            <select value={name} onChange={(e) => setName(e.target.value)}>
            <option value="select"></option>
              <option value="Y1S1">Y1S1</option>
              <option value="Y1S2">Y1S2</option>
              <option value="Y2S1">Y2S1</option>
              <option value="Y2S2">Y2S2</option>
              <option value="Y3S1">Y3S1</option>
              <option value="Y3S2">Y3S2</option>
              <option value="Y4S1">Y4S1</option>
              <option value="Y4S2">Y4S2</option>
            </select>
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>
        <button className="ui primary button" type="submit">
          Register
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SemesterRegistration;
