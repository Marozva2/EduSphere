import React, { useState, useEffect } from "react";
import { Card, Image, Button } from "semantic-ui-react";

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
    <div>
      <h2 className="ui header">Course List</h2>
      <Card.Group>
        {courseList.map((course) => (
          <Card key={course.id}>
            <Image
              src={course.thumbnail || "https://via.placeholder.com/150"}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{course.name}</Card.Header>
              <Card.Meta>
                <span className="date">Course ID: {course.id}</span>
              </Card.Meta>
              <Card.Meta>
                <span className="date">Course code: {course.code}</span>
              </Card.Meta>
              <Card.Description>
                Department ID: {course.department_id}
              </Card.Description>
            </Card.Content>
            <Button
              className="ui primary button"
              onClick={() => handleDelete(course.id)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default CourseList;
