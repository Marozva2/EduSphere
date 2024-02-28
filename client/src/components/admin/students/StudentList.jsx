import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

const StudentList = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    async function fetchStudentList() {
      const response = await fetch("http://127.0.0.1:5000/students");
      const data = await response.json();
      setStudentList(data);
    }

    fetchStudentList();
  }, []);

  return (
    <div>
      <h2 className="ui inverted segment">Student List</h2>
      <a href="/admindash">Admin Home</a>
      <Card.Group>
        {studentList.map((student) => (
          <Card key={student.id}>
            <Image
              src={student.profile_photo || "https://via.placeholder.com/150"}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>
                {student.first_name + " " + student.last_name}
              </Card.Header>
              <Card.Meta>
                <span className="date">Student ID: {student.id}</span>
              </Card.Meta>
              <Card.Description>Email: {student.email}</Card.Description>
              <Card.Description>
                Department ID: {student.department_id}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default StudentList;
