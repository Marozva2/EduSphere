import React, { useState } from "react";
import UnitList from "./UnitList";

const UnitCreate = () => {
  const [unit, setUnit] = useState({});

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
    <div className="inline fields">
      <h2 className="ui center aligned header">Create Unit</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            placeholder="unit_code"
            type="text"
            name="unit_code"
            onChange={handleInputChange}
          />
          <input
            placeholder="name"
            type="text"
            name="name"
            onChange={handleInputChange}
          />
          <input
            placeholder="passmark"
            type="number"
            name="passmark"
            onChange={handleInputChange}
          />
          <input
            placeholder="course_id"
            type="text"
            name="course_id"
            onChange={handleInputChange}
          />
          <input
            placeholder="contact_hours"
            type="number"
            name="contact_hours"
            onChange={handleInputChange}
          />
          <button className="ui primary button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <UnitList />
    </div>
  );
};

export default UnitCreate;
