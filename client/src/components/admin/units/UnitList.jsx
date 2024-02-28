import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

const UnitList = () => {
  const [unitList, setUnitList] = useState([]);

  useEffect(() => {
    async function fetchUnitList() {
      const response = await fetch("http://127.0.0.1:5000/units");
      const data = await response.json();
      setUnitList(data);
    }

    fetchUnitList();
  }, []);

  return (
    <div>
      <h2>Unit List</h2>
      <Card.Group>
        {unitList.map((unit) => (
          <Card key={unit.id}>
            <Image src="https://via.placeholder.com/150" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{unit.name}</Card.Header>
              <Card.Meta>
                <span className="date">Unit Code: {unit.unit_code}</span>
              </Card.Meta>
              <Card.Description>
                Passmark: {unit.passmark}
                <br />
                Course ID: {unit.course_id}
                <br />
                Contact Hours: {unit.contact_hours}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default UnitList;
