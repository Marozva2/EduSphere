import React, { useState, useEffect } from "react";

const Course_WorkEdit = ({ unitId }) => {
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
      <h2>Edit Unit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={unit.id}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="unit_code"
          value={unit.unit_code}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          value={unit.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="passmark"
          value={unit.passmark}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_id"
          value={unit.course_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contact_hours"
          value={unit.contact_hours}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Course_WorkEdit;
