import React, { useState, useEffect } from 'react';

const ExamDetails = () => {
  // State to store exam details fetched from the backend
  const [examDetails, setExamDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const mockExamDetails = {
      title: 'Sample Exam',
      duration: 60,
      instructions: 'Read the questions carefully and answer accordingly.',
    };

    // Simulate loading delay (replace with actual data fetching logic)
    const delay = setTimeout(() => {
      setExamDetails(mockExamDetails);
      setLoading(false);
    }, 1000); // 1 second delay for simulation purposes

    // Cleanup function to cancel any pending requests when the component unmounts
    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <div>
      <h2>Exam Details</h2>
      {loading ? (
        <p>Loading exam details...</p>
      ) : (
        <div>
          <p>Title: {examDetails.title}</p>
          <p>Duration: {examDetails.duration} minutes</p>
          <p>Instructions: {examDetails.instructions}</p>
          
        </div>
      )}
    </div>
  );
};

export default ExamDetails;
