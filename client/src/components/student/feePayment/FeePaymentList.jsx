import React, { useState } from "react";

function FeePayment() {
  const [amount, setAmount] = useState("");
  const [studentId, setStudentId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const feeData = {
      amount: amount,
      student_id: studentId,
    };

    fetch("http://127.0.0.1:5000/fees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feeData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAmount("");
        setStudentId("");
      });
    alert("Successful!!!").catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
  };

  return (
    <div>
      <h1>Fee Payment</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <label>
            Amount Paid:
            <input
              type="number"
              placeholder="amount paid"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <label>
            Student ID:
            <input
              type="number"
              placeholder="student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </label>
        </div>
        <button className="ui primary button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeePayment;
