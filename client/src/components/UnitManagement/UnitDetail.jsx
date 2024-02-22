import React from 'react';

const UnitDetail = () => {
  const unit = {
    name: 'Sample Unit',
    code: 'UNIT-001',
    description: 'This is a sample unit description.',
  };

  return (
    <div>
      <h2>Unit Detail</h2>
      <p><strong>Name:</strong> {unit.name}</p>
      <p><strong>Code:</strong> {unit.code}</p>
      <p><strong>Description:</strong> {unit.description}</p>
    </div>
  );
};

export default UnitDetail;
