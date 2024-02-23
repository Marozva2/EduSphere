import React, { useState, useEffect } from "react";

const DeptEdit = ({ departmentId }) => {
  const [department, setDept] = useState({});

  useEffect(() => {
    async function fetchDepartment() {
      const response = await fetch(
        `http://127.0.0.1:5000/department/${departmentId}`
      );
      const data = await response.json();
      setDept(data);
    }

    fetchDepartment();
  }, [departmentId]);

  async function updateDepartment() {
    const response = await fetch(
      `http://127.0.0.1:5000/department/${departmentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(department),
      }
    );
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setDept({
      ...department,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDepartment();
  };

  return (
    <div>
      <h2>Edit department</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={department.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          value={department.department_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="faculty_id"
          value={department.faculty_id}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DeptEdit;
