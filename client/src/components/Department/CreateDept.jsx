import React, { useState } from "react";

const DepartmentCreate = () => {
  const [department, setDepartment] = useState({});

  async function getDepartmentData() {
    const response = await fetch("http://127.0.0.1:5000/departments");
    console.log(response);
    const data = await response.json();
    return data;
  }

  async function postDepartmentData() {
    const response = await fetch("http://127.0.0.1:5000/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(department),
    });
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setDepartment({
      ...department,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postDepartmentData();
  };

  return (
    <div>
      <h2>Create Department</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="department_name"
          onChange={handleInputChange}
        />
        <input type="text" name="faculty_id" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DepartmentCreate;
