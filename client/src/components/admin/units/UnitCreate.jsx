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
    <>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md mt-8">
        <h2 className="text-3xl mb-4 text-center font-semibold">Add a Unit</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Unit Code
              </label>
              <input
                type="text"
                name="unit_code"
                className="input"
                placeholder="Unit Code"
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
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Passmark
              </label>
              <input
                type="number"
                name="passmark"
                className="input"
                placeholder="Passmark"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course ID
              </label>
              <input
                type="text"
                name="course_id"
                className="input"
                placeholder="Course ID"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Hours
              </label>
              <input
                type="number"
                name="contact_hours"
                className="input"
                placeholder="Contact Hours"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            type="submit"
          >
            Add Unit
          </button>
        </form>
      </div>
      <UnitList />
    </>
  );
};

export default UnitCreate;
