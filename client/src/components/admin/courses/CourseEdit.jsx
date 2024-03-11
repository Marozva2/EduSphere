import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";

function CourseEdit({ courseId }) {
  const [course, setCourse] = useState({});

  useEffect(() => {
    async function fetchCourse() {
      const response = await fetch(`http://127.0.0.1:5000/Course/${courseId}`);
      const data = await response.json();
      setCourse(data);
    }

    fetchCourse();
  }, [courseId]);

  async function updateCourse() {
    const response = await fetch(`http://127.0.0.1:5000/course/${courseId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCourse();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl mb-4 font-semibold text-center">Edit Course</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              type="text"
              id="id"
              name="id"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-xs"
              placeholder="Course ID"
              value={course.id || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-xs"
              placeholder="Name"
              value={course.name || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="code"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-xs"
              placeholder="Code"
              value={course.code || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="department_id"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-xs"
              placeholder="Department ID"
              value={course.department_id || ""}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Edit Course
        </button>
      </div>
      <CourseList />
    </div>
  );
}

export default CourseEdit;
