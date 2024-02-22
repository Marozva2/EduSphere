import { Engineering } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

function Business() {
  const [courses, setCourses] = useState([]);
  const [courseSemesters, setCourseSemesters] = useState([]);
  const [courseWorks, setCourseWorks] = useState([]);
  const [updatedCourseData, setUpdatedCourseData] = useState({
    course_name: "",
    course_code: "",
    department_id: "",
  });

  useEffect(() => {
    fetchCourses();
    fetchCourseSemesters();
    fetchCourseWorks();
  }, []);

  const fetchCourses = () => {
    fetch("/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  };

  const fetchCourseSemesters = () => {
    fetch("/course-semesters")
      .then((response) => response.json())
      .then((data) => setCourseSemesters(data))
      .catch((error) =>
        console.error("Error fetching course semesters:", error)
      );
  };

  const fetchCourseWorks = () => {
    fetch("/course-works")
      .then((response) => response.json())
      .then((data) => setCourseWorks(data))
      .catch((error) => console.error("Error fetching course works:", error));
  };

  const handleInputChange = (e) => {
    setUpdatedCourseData({
      ...updatedCourseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateCourse(updatedCourseData.id, updatedCourseData);
  };

  const handleAddCourse = (newCourseData) => {
    fetch("/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourseData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add course");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Course added successfully:", data);
        fetchCourses();
      })
      .catch((error) => console.error("Error adding course:", error));
  };

  const handleUpdateCourse = (id, updatedCourseData) => {
    fetch(`/course/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourseData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update course");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Course updated successfully:", data);
        fetchCourses();
      })
      .catch((error) => console.error("Error updating course:", error));
  };

  const handleDeleteCourse = (id) => {
    fetch(`/course/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete course");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Course deleted successfully:", data);
        fetchCourses();
      })
      .catch((error) => console.error("Error deleting course:", error));
  };

  //crud for coursesemester

  const handleAddCourseSemester = (newCourseSemesterData) => {
    fetch("/course-semesters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourseSemesterData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add course semester");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Course semester added successfully:", data);
        fetchCourseSemesters();
      })
      .catch((error) => console.error("Error adding course semester:", error));
  };

  const handleUpdateCourseSemester = (id, updatedCourseSemesterData) => {
    fetch(`/course-semester/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourseSemesterData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update course semester");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Course semester updated successfully:", data);
        fetchCourseSemesters();
      })
      .catch((error) =>
        console.error("Error updating course semester:", error)
      );
  };

  const handleDeleteCourseSemester = (id) => {
    fetch(`/course-semester/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete course semester");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Course semester deleted successfully:", data);
        fetchCourseSemesters();
      })
      .catch((error) =>
        console.error("Error deleting course semester:", error)
      );
  };

  const handleAddCourseWork = (newCourseWorkData) => {
    fetch("/course-works", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourseWorkData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add course work");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Course work added successfully:", data);
        fetchCourseWorks();
      })
      .catch((error) => console.error("Error adding course work:", error));
  };

  const handleUpdateCourseWork = (id, updatedCourseWorkData) => {
    fetch(`/course-work/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourseWorkData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update course work");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Course work updated successfully:", data);
        fetchCourseWorks();
      })
      .catch((error) => console.error("Error updating course work:", error));
  };

  const handleDeleteCourseWork = (id) => {
    fetch(`/course-work/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete course work");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Course work deleted successfully:", data);
        fetchCourseWorks();
      })
      .catch((error) => console.error("Error deleting course work:", error));
  };

  return (
    <div>     
      <form onSubmit={handleSubmit}>
        <label>
          Course Name:
          <input
            type="text"
            name="course_name"
            value={updatedCourseData.course_name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Course Code:
          <input
            type="text"
            name="course_code"
            value={updatedCourseData.course_code}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Department ID:
          <input
            type="number"
            name="department_id"
            value={updatedCourseData.department_id}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Update Course</button>
      </form>

      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {`Name: ${course.course_name}, Code: ${course.course_code}, Department ID: ${course.department_id}`}
            <button onClick={() => handleDeleteCourse(course.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2>Course Semesters</h2>
      <ul>
        {courseSemesters.map((semester) => (
          <li key={semester.id}>
            {`Course ID: ${semester.course_id}, Semester ID: ${semester.semester_id}`}
            <button onClick={() => handleDeleteCourseSemester(semester.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2>Course Works</h2>
      <ul>
        {courseWorks.map((work) => (
          <li key={work.id}>
            {`Student ID: ${work.student_id}, Unit ID: ${work.unit_id}, Score: ${work.score}`}
            <button onClick={() => handleDeleteCourseWork(work.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Business;
