import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

const Course_List = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    async function fetchCourseList() {
      const response = await fetch("http://127.0.0.1:5000/courses");
      console.log(response);
      const data = await response.json();
      setCourseList(data);
    }

    fetchCourseList();
  }, []);

  return (
    <div>
      <h2>Course List</h2>
      <Card.Group>
        {courseList.map((course) => (
          <Card key={course.id}>
            <Image src="https://via.placeholder.com/150" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{course.course_name}</Card.Header>
              <Card.Meta>
                <span className="date">Course Code: {course.course_code}</span>
              </Card.Meta>
              <Card.Description>
                Department ID: {course.course_id}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default Course_List;
