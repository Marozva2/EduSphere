import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

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

  return (
    <div>
      <h2 className="ui inverted segment">Course List</h2>
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
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default CourseList;
