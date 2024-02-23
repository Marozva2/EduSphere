import React, { useState, useEffect } from "react";

const lecturerDetail = ({ lecturerId }) => {
  const [lecturer, setLecturer] = useState(null);

  useEffect(() => {
    async function fetchLecturer() {
      const response = await fetch(
        `http://127.0.0.1:5000/lecturer/${lecturerId}`
      );
      const data = await response.json();
      setLecturer(data);
    }

    fetchLecturer();
  }, [lecturerId]);

  return (
    <div>
      <h2>Lecturer Detail</h2>
      {lecturer ? (
        <div>
          <p>
            <strong>lecturer Id:</strong> {lecturer.id}
          </p>
          <p>
            <strong>lecturer Title:</strong> {lecturer.lecture_title}
          </p>
          <p>
            <strong>Faculty Id:</strong> {lecturer.faculty_id}
          </p>
          <p>
            <strong>DateTime:</strong> {lecturer.datetime}
          </p>
          <p>
            <strong>Location:</strong> {lecturer.location}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default lecturerDetail;
