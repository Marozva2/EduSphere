import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

const LecturerList = () => {
  const [lecturerList, setLecturerList] = useState([]);

  useEffect(() => {
    async function fetchLecturerList() {
      const response = await fetch("http://127.0.0.1:5000/lecturers");
      console.log(response)
      const data = await response.json();
      setLecturerList(data);
    }

    fetchLecturerList();
  }, []);

  return (
    <div>
      <h2>Lecturer List</h2>
      <Card.Group>
        {lecturerList.map((lecturer) => (
          <Card key={lecturer.id}>
            <Image src="https://via.placeholder.com/150" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{lecturer.lecture_title}</Card.Header>
              <Card.Meta>
                <span className="date">Lecturer ID: {lecturer.id}</span>
              </Card.Meta>
              <Card.Description>
                Faculty ID: {lecturer.faculty_id}
                <br />
                Date and Time: {lecturer.datetime}
                <br />
                Location: {lecturer.location}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default LecturerList;
