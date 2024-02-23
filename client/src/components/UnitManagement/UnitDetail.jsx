import React from 'react';

const UnitDetail = () => {
  const unit = {
    name: 'Nutrition',
    code: 'UNIT-001',
    description: 'Unit trains Community nutritionists who play a pivotal role in educating members of the community on ideal nutrition, diet and food selection. In addition, this cadre educates the community on ways to develop healthy eating habits that fulfill their dietetic requirements and ways to manage diseases through nutrition.',
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
