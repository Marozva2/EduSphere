import React from 'react';

const UnitList = () => {
  const unitItems = ['Community Health', 'Nutrition', 'Public Health', 'Health Promotion']; 

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