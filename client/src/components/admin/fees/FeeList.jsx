import React, { useState, useEffect } from "react";

const FeeList = () => {
  const [feeList, setFeeList] = useState([]);

  useEffect(() => {
    async function fetchFeeList() {
      try {
        const response = await fetch("http://127.0.0.1:5000/fees");
        const data = await response.json();
        setFeeList(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchFeeList();
  }, []);

  return (
    <div>
      <h1 className="text-4xl mb-3 text-center font-semibold">Fees List</h1>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Id</th>
            <th className="border border-gray-400 px-4 py-2">Amount</th>
            <th className="border border-gray-400 px-4 py-2">Student ID</th>
          </tr>
        </thead>
        <tbody>
          {feeList.map((fee) => (
            <tr key={fee.id}>
              <td className="border border-gray-400 px-4 py-2">{fee.id}</td>
              <td className="border border-gray-400 px-4 py-2">{fee.amount}</td>
              <td className="border border-gray-400 px-4 py-2">
                {fee.student_id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeList;
