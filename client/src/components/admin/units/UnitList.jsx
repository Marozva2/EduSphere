import React, { useState, useEffect } from "react";

const UnitList = () => {
  const [unitList, setUnitList] = useState([]);

  useEffect(() => {
    async function fetchUnitList() {
      try {
        const response = await fetch("http://127.0.0.1:5000/units");
        const data = await response.json();
        setUnitList(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchUnitList();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://127.0.0.1:5000/unit/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setUnitList(unitList.filter((unit) => unit.id !== id));
    } else {
      console.error("Failed to delete unit:", response);
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-3 text-center font-semibold">Unit List</h1>
      <div className="grid grid-cols-3 gap-4">
        {unitList.map((unit) => (
          <div key={unit.id} className="border border-gray-400 rounded p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Thumbnail"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{unit.name}</h3>
            <p className="mb-2">Unit Code: {unit.unit_code}</p>
            <p className="mb-2">Passmark: {unit.passmark}</p>
            <p className="mb-2">Course ID: {unit.course_id}</p>
            <p className="mb-2">Contact Hours: {unit.contact_hours}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(unit.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitList;
