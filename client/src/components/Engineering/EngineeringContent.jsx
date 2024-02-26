import React from 'react';
import Footer from '../Footer';
import Image from '../../../images/l3.jpg';

function EngineeringContent() {
  return (
    <>
      <section className="landing-section" style={{width: '100%', height: '50%'}}>
        <div className="landing-image" style={{ backgroundImage: `url(${Image})` }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-left" style={{color:'goldenrod', fontSize: '40px'}} >
                <h1 className="landing-title">Faculty of Engineering</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="departments-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="departments">
                <h2>Departments</h2>
                <ul className="department-list">
                  <li>Computer Science & IT</li>
                  <li>Actuarial Science</li>
                  <li>Telecommunications</li>
                  <li>Information Systems</li>
                  <li>Mechatronics Engineering</li>
                  <li>Electrical and Electronics Engineering</li>
                  <li>Civil Engineering</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cards">
                
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <Footer />
    </>
  );
}

export default EngineeringContent;
