import React, { useState, useEffect } from "react";
import FeeList from "./FeeList";

function FeeEdit({ feeId }) {
  const [fee, setFee] = useState({});

  useEffect(() => {
    async function fetchfee() {
      const response = await fetch(`http://127.0.0.1:5000/fee/${feeId}`);
      const data = await response.json();
      setFee(data);
    }

    fetchfee();
  }, [feeId]);

  async function updatefee() {
    const response = await fetch(`http://127.0.0.1:5000/fee/${feeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fee),
    });
    const data = await response.json();
    return data;
  }

  const handleInputChange = (event) => {
    setFee({
      ...fee,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatefee();
  };

  return (
    <div className="inline fields">
      <h2>Edit fee</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        {/* <div className="inline fields"> */}
          <input
            type="text"
            placeholder="Fee ID"
            name="id"
            value={fee.id}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="amount"
            name="amount"
            value={fee.amount}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="user_id"
            placeholder="user_id"
            value={fee.user_id}
            onChange={handleInputChange}
          />
          <button className="ui button" type="submit">
            Submit
          </button>
        {/* </div> */}
      </form>
      <FeeList/>
    </div>
  );
}

export default FeeEdit;
