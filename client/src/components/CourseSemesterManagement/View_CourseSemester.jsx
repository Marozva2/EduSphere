import React from "react";

const View_CourseSemester = () => {
  const courseSemesterDetails = {
    title: "2.1",
    description: "2.1 2024",
    deadline: "2024-12-31",
    status: "Pending",
  };

  return (
    <div>
      <h2>View Course Semester</h2>
      <div>
        <h3>{courseSemesterDetails.title}</h3>
        <p>Description: {courseSemesterDetails.description}</p>
        <p>Deadline: {courseSemesterDetails.deadline}</p>
        <p>Status: {courseSemesterDetails.status}</p>
      </div>
    </div>
  );
};

export default View_CourseSemester;
