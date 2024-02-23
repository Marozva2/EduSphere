import React from 'react';

const Course_WorkDetail = () => {
  const courseWorkDetails = [
    { id: 1, title: 'Assignment 1', deadline: '2022-09-30' },
    { id: 2, title: 'Quiz 1', deadline: '2022-10-15' },
    { id: 3, title: 'Project 1', deadline: '2022-11-30' },
  ];

  return (
    <div>
      <h2>Course Work Detail</h2>
      <ul>
        {courseWorkDetails.map((work) => (
          <li key={work.id}>
            <strong>{work.title}</strong> - Deadline: {work.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Course_WorkDetail;
