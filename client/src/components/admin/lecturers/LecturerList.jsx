import React, { useState, useEffect } from "react";

const LecturerList = () => {
  const [lecturerList, setLecturerList] = useState([]);

  useEffect(() => {
    async function fetchLecturerList() {
      try {
        const response = await fetch("http://127.0.0.1:5000/lecturers");
        const data = await response.json();
        setLecturerList(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchLecturerList();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/lecturer/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setLecturerList(lecturerList.filter((lecturer) => lecturer.id !== id));
      } else {
        console.error("Failed to delete lecturer:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2 className="bg-gray-800 text-white p-4">Lecturer List</h2>
      <div className="grid grid-cols-3 gap-4">
        {lecturerList.map((lecture) => (
          <div key={lecture.id} className="bg-white shadow-md p-4">
            <img
              src={lecture.thumbnail || "https://via.placeholder.com/150"}
              alt="lecture thumbnail"
              className="w-full h-auto"
            />
            <div className="text-center mt-4">
              <h3 className="font-bold">{lecture.lecture_title}</h3>
              <p>ID: {lecture.id}</p>
              <p>Datetime: {lecture.datetime}</p>
              <p>Lecture location: {lecture.location}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => handleDelete(lecture.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LecturerList;
