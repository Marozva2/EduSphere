import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

const Course_WorkList = () => {
  const [courseWorkList, setCourseWorkList] = useState([]);

  useEffect(() => {
    async function fetchCourseWorkList() {
      const response = await fetch("http://127.0.0.1:5000/course_works");
      console.log(response);
      const data = await response.json();
      setCourseWorkList(data);
    }

    fetchCourseWorkList();
  }, []);

  return (
    <div>
      <h2>Course Work List</h2>
      <Card.Group>
        {courseWorkList.map((courseWork) => (
          <Card key={courseWork.id}>
            <Image src="https://via.placeholder.com/150" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{courseWork.unit_id}</Card.Header>
              <Card.Meta>
                <span className="date">Score: {courseWork.score}</span>
              </Card.Meta>
              <Card.Description>
                Student ID: {courseWork.student_id}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default Course_WorkList;
