import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-section">
        <nav>
          <ul>
            <li><a href="#student">Student Login</a></li>
            <li><a href="#staff">Staff Login</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-section">
        <div className="logo">
          <img src="path/to/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li>
              <a href="#academics">Academics</a>
              <ul className="dropdown">
                <li><a href="#engineering">Faculty of Engineering</a></li>
                <li><a href="#education">Faculty of Education</a></li>
                <li><a href="#business">Faculty of Business</a></li>
                <li><a href="#health">Faculty of Medicine & Health Sciences</a></li>
                <li><a href="#law">Faculty of Law</a></li>
              </ul>
            </li>
            <li>
              <a href="#admissions">Admissions</a>
              <ul className="dropdown">
                <li><a href="#download-form">Download Application Form</a></li>
                <li><a href="#apply">Apply</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
