import React from 'react';

const Course_WorkList = () => {
  const courseWorkItems = [
    'Assignment 1',
    'Quiz 1',
    'Project Presentation',
    // Add more course work items as needed
  ];

  return (
    <div>
      <h2>Course Work List</h2>
      <ul>
        {courseWorkItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Course_WorkList;

