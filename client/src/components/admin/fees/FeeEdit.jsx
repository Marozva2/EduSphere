import React, { useState, useEffect } from "react";
import FeeList from "./FeeList";

function FeeEdit({ feeId }) {
  const [fee, setFee] = useState({});

  useEffect(() => {
    async function fetchFee() {
      const response = await fetch(`http://127.0.0.1:5000/fee/${feeId}`);
      const data = await response.json();
      setFee(data);
    }

    fetchFee();
  }, [feeId]);

  async function updateFee() {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateFee();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Edit Fee</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Fee ID"
          name="id"
          value={fee.id || ""}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          value={fee.amount || ""}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="User ID"
          name="user_id"
          value={fee.user_id || ""}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-xs"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit Fee
        </button>
      </form>
      <FeeList />
    </div>
  );
}

export default FeeEdit;
