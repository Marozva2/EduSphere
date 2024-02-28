import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

const SemesterList = () => {
  const [semesterList, setSemesterList] = useState([]);

  useEffect(() => {
    async function fetchSemesterList() {
      const response = await fetch("http://127.0.0.1:5000/semesters");
      const data = await response.json();
      setSemesterList(data);
    }

    fetchSemesterList();
  }, []);

  return (
    <div>
      <h2 className="ui inverted segment">Semester List</h2>
      <Card.Group>
        {semesterList.map((semester) => (
          <Card key={semester.id}>
            <Image
              src={semester.thumbnail || "https://via.placeholder.com/150"}
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{semester.name}</Card.Header>
              <Card.Meta>
                <span className="date">semester ID: {semester.id}</span>
              </Card.Meta>
              <Card.Meta>
                <span className="date">semester name: {semester.name}</span>
              </Card.Meta>
              <Card.Meta>
                <span className="date">
                  semester start_date: {semester.start_date}
                </span>
              </Card.Meta>
              <Card.Meta>
                <span className="date">
                  semester end_date: {semester.end_date}
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default SemesterList;
