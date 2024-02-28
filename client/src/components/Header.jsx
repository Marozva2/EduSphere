import React, { useState } from "react";

function Header() {
  const [showAcademicsDropdown, setShowAcademicsDropdown] = useState(false);
  const [showAdmissionsDropdown, setShowAdmissionsDropdown] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img
              src="../../images/logo.png"
              alt="Logo"
              className="logo"
              style={{ width: "80px" }}
            />
            <span className="d-none d-lg-inline">EduSphere</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setShowAcademicsDropdown(true)}
                onMouseLeave={() => setShowAcademicsDropdown(false)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#academics"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ display: showAcademicsDropdown ? "block" : "none" }}
                >
                  <li>
                    <a className="dropdown-item" href="/engineering">
                      Faculty of Engineering
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/education">
                      Faculty of Education
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/business">
                      Faculty of Business
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/health">
                      Faculty of Medicine & Health Sciences
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/law">
                      Faculty of Law
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setShowAdmissionsDropdown(true)}
                onMouseLeave={() => setShowAdmissionsDropdown(false)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#admissions"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admissions
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ display: showAdmissionsDropdown ? "block" : "none" }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../form/application-form.pdf"
                      download
                    >
                      Download Application Form
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login-page">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
