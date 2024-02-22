import React from 'react';

const View_CourseWork = () => {
  const courseWorkDetails = {
    title: 'React Basics',
    description: 'Learn the fundamentals of React',
    deadline: '2022-12-31',
    status: 'Pending',
  };

  return (
    <div>
      <h2>View Course Work</h2>
      <div>
        <h3>{courseWorkDetails.title}</h3>
        <p>Description: {courseWorkDetails.description}</p>
        <p>Deadline: {courseWorkDetails.deadline}</p>
        <p>Status: {courseWorkDetails.status}</p>
      </div>
    </div>
  );
};

export default View_CourseWork;
