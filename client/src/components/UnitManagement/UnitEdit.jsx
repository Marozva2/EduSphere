import React, { useState } from 'react';

const UnitEdit = () => {
  const [unitDetails, setUnitDetails] = useState({ name: '', quantity: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUnitDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(unitDetails); 
  };

  return (
    <div>
      <h2>Edit Unit</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={unitDetails.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={unitDetails.quantity}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UnitEdit;
