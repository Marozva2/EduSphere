import React from "react";

const View_Course = () => {
  const courseDetails = {
    title: "Nursing",
    description: "Anatomy and Physiology",
    deadline: "2022-12-31",
    status: "Pending",
    duration:"three years"
  };

  return (
    <div>
      <h2>View Course</h2>
      <div>
        <h3>{courseDetails.title}</h3>
        <p>Description: {courseDetails.description}</p>
        <p>Deadline: {courseDetails.deadline}</p>
        <p>Status: {courseDetails.status}</p>
        <p>Duration: {courseDetails.duration}</p>
      </div>
    </div>
  );
};

export default View_Course;
