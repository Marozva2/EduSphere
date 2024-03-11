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
    <>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md mt-8">
        <h2 className="text-2xl mb-4 font-semibold">Edit Unit</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ID
              </label>
              <input
                type="number"
                name="id"
                className="input"
                placeholder="ID"
                value={unit.id || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Unit Code
              </label>
              <input
                type="number"
                name="unit_code"
                className="input"
                placeholder="Unit Code"
                value={unit.unit_code || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                value={unit.name || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Passmark
              </label>
              <input
                type="text"
                name="passmark"
                className="input"
                placeholder="Passmark"
                value={unit.passmark || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black-700">
                Course ID
              </label>
              <input
                type="text"
                name="course_id"
                className="input"
                placeholder="Course ID"
                value={unit.course_id || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Hours
              </label>
              <input
                type="text"
                name="contact_hours"
                className="input"
                placeholder="Contact Hours"
                value={unit.contact_hours || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            type="submit"
          >
            Edit
          </button>
        </form>
      </div>
      <UnitList />
    </>
  );
}

export default EditUnit;
