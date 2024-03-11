import React, { useState } from "react";
import CourseList from "./CourseList";

const CreateCourses = () => {
  const [course, setCourse] = useState({});

  async function postCourseData() {
    const response = await fetch("http://127.0.0.1:5000/courses", {
      method: "POST",
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
    await postCourseData();
    setCourse({}); // Clear the form inputs
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md fixed left-10 top-50 bottom-30 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 flex justify-center items-center">
          Create Course
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            value={course.name || ""}
            required
          />
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            name="code"
            placeholder="Code"
            onChange={handleInputChange}
            value={course.code || ""}
            required
          />
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            name="department_id"
            placeholder="Department ID"
            onChange={handleInputChange}
            value={course.department_id || ""}
            required
          />
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            name="thumbnail"
            placeholder="Thumbnail"
            onChange={handleInputChange}
            value={course.thumbnail || ""}
            required
          />
          <div className="col-span-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              type="submit"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1 pl-64">
        <CourseList />
      </div>
    </div>
  );
};

export default CreateCourses;
