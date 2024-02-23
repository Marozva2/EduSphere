// StudentDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentServices from './StudentServices';

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetch student data by ID from the server
    StudentServices.getStudentById(id)
      .then((data) => {
        setStudent(data);
      })
      .catch((error) => {
        console.error(`Error fetching student with ID ${id}:`, error);
      });
  }, [id]);

  return (
    <div>
      <h2>Student Details</h2>
      {student && (
        <div>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Department: {student.department}</p>
          
        </div>
      )}
    </div>
  );
}

export default StudentDetails;
