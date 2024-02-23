import React, { useState, useEffect } from "react";

const UnitDetail = ({ unitId }) => {
  const [unit, setUnit] = useState(null);

  useEffect(() => {
    async function fetchUnit() {
      const response = await fetch(`http://127.0.0.1:5000/unit/${unitId}`);
      const data = await response.json();
      setUnit(data);
    }

    fetchUnit();
  }, [unitId]);

  return (
    <div>
      <h2>Unit Detail</h2>
      {unit ? (
        <div>
          <p>
            <strong>Unit Code:</strong> {unit.unit_code}
          </p>
          <p>
            <strong>Unit Name:</strong> {unit.name}
          </p>
          <p>
            <strong>Unit Passmark:</strong> {unit.passmark}
          </p>
          <p>
            <strong>Course Id:</strong> {unit.course_id}
          </p>
          <p>
            <strong>Contact Hours:</strong> {unit.contact_hours}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UnitDetail;
