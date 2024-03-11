import React, { useState } from "react";
import StudentList from "./StudentList";

function StudentCreate() {
  const [student, setStudent] = useState({});

  async function postStudentData() {
    const response = await fetch("http://127.0.0.1:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postStudentData();
    setStudent({});
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="text-2xl font-bold mb-4 flex justify-center items-center">
          Enroll Student
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            name="first_name"
            placeholder="First Name"
            value={student.first_name || ""}
            onChange={handleInputChange}
            required
          />
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={student.last_name || ""}
            onChange={handleInputChange}
            required
          />
          <input
            className="border border-gray-300 rounded-md p-2"
            type="email"
            name="email"
            placeholder="Email"
            value={student.email || ""}
            onChange={handleInputChange}
            required
          />
          <input
            className="border border-gray-300 rounded-md p-2"
            type="number"
            name="department_id"
            placeholder="Department ID"
            value={student.department_id || ""}
            onChange={handleInputChange}
            required
          />
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            name="profile_photo"
            placeholder="Profile Photo"
            value={student.profile_photo || ""}
            onChange={handleInputChange}
            required
          />
          <div className="col-span-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              type="submit"
            >
              Enroll
            </button>
          </div>
        </form>
      </div>
      <StudentList />
    </div>
  );
}

export default StudentCreate;
