import React, { useState, useEffect } from "react";

const CourseSemester_Edit = ({ coursesemesterId }) => {
  const [courseSemester, setCourseSemester] = useState({});

  useEffect(() => {
    async function fetchCourseSemester() {
      const response = await fetch(
        `http://127.0.0.1:5000/course-semesters/${coursesemesterId}`
      );
      const data = await response.json();
      setCourseSemester(data);
    }

    fetchCourseSemester();
  }, [coursesemesterId]);

  async function updateCourseSemester() {
    const response = await fetch(
      `http://127.0.0.1:5000/course-semesters/${coursesemesterId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseWork),
      }
    );
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setCourseSemester({
      ...courseSemester,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCourseSemester();
  };

  return (
    <div>
      <h2>Edit Course Semester </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="coursename"
          value={courseSemester.courseSemester}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_id"
          value={courseSemester.course_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="semester_id"
          value={courseSemester.semester_id}
          onChange={handleInputChange}
        />      
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseSemester_Edit;
