// StudentList.jsx
import React, { useEffect, useState } from 'react';
import StudentServices from './StudentServices';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    
     
    const fetchAllStudents = async () => {
      try{
        const response = await fetch(`http://localhost:5000/students`);
        const data = await response.json();
        setExams(data); 
      } catch (error) {
        console.error('Error fetching student:', error);
      }
      }
      
    
   
  }, [id]);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
