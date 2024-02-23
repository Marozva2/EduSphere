import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

const DeptList = () => {
  const [DeptList, setDeptList] = useState([]);

  useEffect(() => {
    async function fetchDeptList() {
      const response = await fetch("http://127.0.0.1:5000/departments");
      const data = await response.json();
      setDeptList(data);
    }

    fetchDeptList();
  }, []);

  return (
    <div>
      <h2>Dept List</h2>
      <Card.Group>
        {DeptList.map((department) => (
          <Card key={department.id}>
            <Image src="https://via.placeholder.com/150" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{department.department_name}</Card.Header>
              <Card.Meta>
                <span className="date">Department ID: {department.id}</span>
              </Card.Meta>
              <Card.Description>
                Faculty ID: {department.faculty_id}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default DeptList;
