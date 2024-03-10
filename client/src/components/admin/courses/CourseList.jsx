import React, { useState, useEffect } from "react";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    async function fetchCourseList() {
      const response = await fetch("http://127.0.0.1:5000/courses");
      const data = await response.json();
      setCourseList(data);
    }

    fetchCourseList();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://127.0.0.1:5000/course/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setCourseList(courseList.filter((course) => course.id !== id));
    } else {
      console.error("Failed to delete course:", response);
    }
  };

  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-7xl mx-auto grid gap-70 md:grid-cols-2 lg:grid-cols-2">
        {courseList.map((course) => (
          <figure
            key={course.id}
            className="bg-slate-100 rounded-xl p-4 md:p-0 dark:bg-slate-800 border border-gray-300"
          >
            <img
              className="w-full h-32 md:h-48 object-cover rounded-lg"
              src={course.thumbnail || "https://via.placeholder.com/150"}
              alt={course.name}
            />
            <div className="pt-4">
              <p className="text-sky-500 dark:text-sky-400">{course.name}</p>
              <div className="text-sky-500 dark:text-sky-400">
                Course ID: {course.id}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Course Code: {course.code}
              </div>
            </div>
            <button
              type="button"
              className="block w-full mt-4 py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
              onClick={() => handleDelete(course.id)}
            >
              Delete
            </button>
          </figure>
        ))}
      </div>
    </main>
  );
};

export default CourseList;
