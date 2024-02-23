import React, { useState } from 'react';

const UnitCreate = () => {
  const [unitName, setUnitName] = useState('');

  const handleUnitSubmit = (e) => {
    e.preventDefault();
    
    console.log('Unit Name:', unitName);
  };

  return (
    <div>
      <h2>Create Unit</h2>
      <form onSubmit={handleUnitSubmit}>
        <input
          type="text"
          value={unitName}
          onChange={(e) => setUnitName(e.target.value)}
          placeholder="Enter Unit Name"
        />
        <button type="submit">Create Unit</button>
      </form>
    </div>
  );
};

export default UnitCreate;
