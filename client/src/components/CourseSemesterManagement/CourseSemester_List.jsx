import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

const CourseSemester_List = () => {
  const [courseSemesterList, setCourseSemesterList] = useState([]);

  useEffect(() => {
    async function fetchCourseSemesterList() {
      const response = await fetch("http://127.0.0.1:5000/course-semesters");
      console.log(response);
      const data = await response.json();
      setCourseSemesterList(data);
    }

    fetchCourseSemesterList();
  }, []);

  return (
    <div>
      <h2>Course Semester List</h2>
      <Card.Group>
        {courseSemesterList.map((courseSemester) => (
          <Card key={courseSemester.id}>
            <Image src="https://via.placeholder.com/150" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{courseSemester.course_id}</Card.Header>            
              <Card.Description>
                Semester ID: {courseSemester.semester_id}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default CourseSemester_List;
