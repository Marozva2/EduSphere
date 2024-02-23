import React, { useState, useEffect } from 'react';

const ExamList = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetchExams(); // Fetch exams when component mounts
  }, []);

  const fetchExams = async () => {
    try {
      
      const response = await fetch('http://localhost:5000/exams');
      const data = await response.json();
      setExams(data); 
    } catch (error) {
      console.error('Error fetching exams:', error);
    }
  };

  return (
    <div>
      <h2>Exam List</h2>
      <ul>
        {exams.map(exam => (
          <li key={exam.id}>{exam.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExamList;
