import React from 'react';

const UnitList = () => {
  const unitItems = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4']; 

  return (
    <div>
      <h2>Unit List</h2>
      <ul>
        {unitItems.map((unit, index) => (
          <li key={index}>{unit}</li>
        ))}
      </ul>
    </div>
  );
};

export default UnitList;