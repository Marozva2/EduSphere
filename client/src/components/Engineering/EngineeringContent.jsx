import React from 'react';
import Header from '../Header'
import Footer from '../Footer'

function EngineeringContent() {
  return (
    <div>
      <h1 className="heading" style={{fontSize: '30px'}}>Faculty of Engineering</h1>
      <ul className="list" style={{listStyle: 'none', color: 'green'}}>
        <li>Computer Science</li>
        <li>Information Technology</li>
        <li>Actuarial Science</li>
        <li>Telecommunications</li>
        <li>Information Systems</li>
        <li>Mechatronics Engineering</li>
        <li>Electrical and Electronics Engineering</li>
        <li>Civil Engineering</li>
      </ul>
    <Footer />
    </div>
  );
}

export default EngineeringContent;
