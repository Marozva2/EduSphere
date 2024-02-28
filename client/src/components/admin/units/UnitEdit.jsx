import React, { useState, useEffect } from "react";
import UnitList from "./UnitList";

function EditUnit({ unitId }) {
  const [unit, setUnit] = useState({});

  useEffect(() => {
    async function fetchUnit() {
      const response = await fetch(`http://127.0.0.1:5000/unit/${unitId}`);
      const data = await response.json();
      setUnit(data);
    }

    fetchUnit();
  }, [unitId]);

  async function updateunit() {
    const response = await fetch(`http://127.0.0.1:5000/unit/${unitId}`, {
      method: "PATCH",
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
    updateunit();
  };

  return (
    <div>
      <h2>Edit unit</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="number"
            name="id"
            placeholder="ID"
            value={unit.id}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="unit_code"
            placeholder="unit_code"
            value={unit.unit_code}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={unit.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="passmark"
            placeholder="passmark"
            value={unit.passmark}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="contact_hours"
            placeholder="course_id"
            value={unit.course_id}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="contact_hours"
            placeholder="contact_hours"
            value={unit.contact_hours}
            onChange={handleInputChange}
          />
        </div>
        <button className="ui primary button" type="submit">
          Submit
        </button>
      </form>
      <UnitList />
    </div>
  );
}

export default EditUnit;
