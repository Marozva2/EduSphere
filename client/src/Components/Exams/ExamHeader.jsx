import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ExamHeader = ({ examId }) => {
  const [examInfo, setExamInfo] = useState(null);

  useEffect(() => {
    // Fetch exam information from the backend
    const fetchExamInfo = async () => {
      try {
        const response = await fetch(`/http://localhost:5000/exams/${examId}`); 
        if (!response.ok) {
          throw new Error('Failed to fetch exam information');
        }
        const data = await response.json();
        setExamInfo(data);
      } catch (error) {
        console.error('Error fetching exam information:', error);
      }
    };

    fetchExamInfo();

    // Clean up function
    return () => {
      // Cleanup code (if needed)
    };
  }, [examId]);

  return (
    <div className="exam-header">
      {examInfo ? (
        <>
          <h1>{examInfo.title}</h1>
          <p>{examInfo.description}</p>
         
        </>
      ) : (
        <p>Loading exam information...</p>
      )}
    </div>
  );
};

ExamHeader.propTypes = {
  examId: PropTypes.string.isRequired,
};

export default ExamHeader;
