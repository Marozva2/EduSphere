import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";

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
      <h2 className="ui center aligned header">Fees List</h2>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Student ID</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {feeList.map((fee) => (
            <Table.Row key={fee.id}>
              <Table.Cell>{fee.amount}</Table.Cell>
              <Table.Cell>{fee.student_id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default FeeList;
