import React, { useState, useEffect } from "react";
import { Card, Image, Button } from "semantic-ui-react";

const LecturerList = () => {
  const [lecturerList, setLecturerList] = useState([]);

  useEffect(() => {
    async function fetchlecturerList() {
      const response = await fetch("http://127.0.0.1:5000/lecturers");
      const data = await response.json();
      setLecturerList(data);
    }

    fetchlecturerList();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://127.0.0.1:5000/lecturer/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setLecturerList(lecturerList.filter((lecturer) => lecturer.id !== id));
    } else {
      console.error("Failed to delete lecturer:", response);
    }
  };

  return (
    <div>
      <h2 className="ui inverted segment">Lecturer List</h2>
      <Card.Group>
        {lecturerList.map((lecture) => (
          <Card key={lecture.id}>
            <Image
              src={lecture.thumbnail || "https://via.placeholder.com/150"}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{lecture.lecture_title}</Card.Header>
              <Card.Meta>
                <span className="date">ID: {lecture.id}</span>
              </Card.Meta>
              <Card.Meta>
                <span className="date">Datetime: {lecture.datetime}</span>
              </Card.Meta>
              <Card.Meta>
                <span className="date">
                  lecture location: {lecture.location}
                </span>
              </Card.Meta>
            </Card.Content>
            <Button
              color="red"
              onClick={() => handleDelete(lecture.id)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default LecturerList;
