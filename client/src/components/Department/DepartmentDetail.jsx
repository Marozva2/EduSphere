import React, { useState, useEffect } from "react";

const DepartmentDetail = ({ departmentId }) => {
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    async function fetchDepartment() {
      const response = await fetch(
        `http://127.0.0.1:5000/department/${departmentId}`
      );
      const data = await response.json();
      setDepartment(data);
    }

    fetchDepartment();
  }, [departmentId]);

  return (
    <div>
      <h2>Department Detail</h2>
      {department ? (
        <div>
          <p>
            <strong>Department Id:</strong> {department.id}
          </p>
          <p>
            <strong>Department Name:</strong> {department.name}
          </p>
          <p>
            <strong>Faculty Id:</strong> {department.faculty_id}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DepartmentDetail;
