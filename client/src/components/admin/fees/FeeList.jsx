import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

const FeeList = () => {
  const [feeList, setFeeList] = useState([]);

  useEffect(() => {
    async function fetchFeeList() {
      const response = await fetch("http://127.0.0.1:5000/fees");
      const data = await response.json();
      setFeeList(data);
    }

    fetchFeeList();
  }, []);

  return (
    <div>
      <h2 className="ui inverted segment">Fees List</h2>
      <a href="/admindash">Admin Dashboard</a>
      <Card.Group>
        {feeList.map((fee) => (
          <Card key={fee.id}>
            {/* <Image
              src={fee.thumbnail || "https://via.placeholder.com/150"}
              wrapped
              ui={false}
            /> */}
            <Card.Content>
              <Card.Header>{fee.amount}</Card.Header>
              <Card.Meta>
                <span className="date">User ID: {fee.user_id}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default FeeList;
