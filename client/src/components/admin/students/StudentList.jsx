import React, { useState, useEffect } from "react";

const StudentList = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    async function fetchStudentList() {
      const response = await fetch("http://127.0.0.1:5000/students");
      const data = await response.json();
      setStudentList(data);
    }

    fetchStudentList();
  }, []);

  return (
    <div className="px-4 md:px-8 py-6 md:py-10">
      <h2 className="text-2xl font-semibold mb-4">Student List</h2>
      <a href="/admindash" className="block text-blue-500 mb-4">
        Admin Home
      </a>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {studentList.map((student) => (
          <div
            key={student.id}
            className="bg-gray-100 rounded-xl border border-gray-300 p-4"
          >
            <img
              src={student.profile_photo || "https://via.placeholder.com/150"}
              alt={student.first_name + " " + student.last_name}
              className="w-full object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">
                {student.first_name + " " + student.last_name}
              </h3>
              <p className="text-gray-600">Student ID: {student.id}</p>
              <p className="text-gray-600">Email: {student.email}</p>
              <p className="text-gray-600">
                Department ID: {student.department_id}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
