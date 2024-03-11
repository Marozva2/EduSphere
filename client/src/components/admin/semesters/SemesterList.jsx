import React, { useState, useEffect } from "react";

const SemesterList = () => {
  const [semesterList, setSemesterList] = useState([]);

  useEffect(() => {
    async function fetchSemesterList() {
      try {
        const response = await fetch("http://127.0.0.1:5000/semesters");
        const data = await response.json();
        setSemesterList(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchSemesterList();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://127.0.0.1:5000/semester/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setSemesterList(semesterList.filter((semester) => semester.id !== id));
    } else {
      console.error("Failed to delete semester:", response);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white bg-gray-800 p-4">
        Semester List
      </h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {semesterList.map((semester) => (
          <div key={semester.id} className="border border-gray-400 rounded p-4">
            <img
              src={semester.thumbnail || "https://via.placeholder.com/150"}
              alt="Thumbnail"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{semester.name}</h3>
            <p className="mb-2">ID: {semester.id}</p>
            <p className="mb-2">Name: {semester.name}</p>
            <p className="mb-2">Start Date: {semester.start_date}</p>
            <p className="mb-2">End Date: {semester.end_date}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(semester.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SemesterList;
