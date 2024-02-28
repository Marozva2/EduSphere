import React, { useState } from "react";

const UnitCreate = () => {
  const [unit, setUnit] = useState({});

  async function getUnitData() {
    const response = await fetch("http://127.0.0.1:5000/units");
    console.log(response);
    const data = await response.json();
    return data;
  }

  async function postUnitData() {
    const response = await fetch("http://127.0.0.1:5000/units", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unit),
    });
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setUnit({
      ...unit,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postUnitData();
  };

  return (
    <div>
      <h2>Create Unit</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="unit_code" onChange={handleInputChange} />
        <input type="text" name="name" onChange={handleInputChange} />
        <input type="number" name="passmark" onChange={handleInputChange} />
        <input type="text" name="course_id" onChange={handleInputChange} />
        <input type="text" name="contact_hours" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UnitCreate;
