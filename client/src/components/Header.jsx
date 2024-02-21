// Header.jsx
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [showAcademicsDropdown, setShowAcademicsDropdown] = useState(false);
  const [showAdmissionsDropdown, setShowAdmissionsDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownClick = (path) => {
    // Navigate to the selected path
    navigate(path);
    // Hide the dropdown
    setShowAcademicsDropdown(false);
    setShowAdmissionsDropdown(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="../../images/logo.png"
              alt="Logo"
              className="logo"
              style={{ width: "80px" }}
            />
            <span className="d-none d-lg-inline">EduSphere</span>
          </NavLink>
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
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setShowAcademicsDropdown(true)}
                onMouseLeave={() => setShowAcademicsDropdown(false)}
              >
                <span
                  className="nav-link dropdown-toggle"
                  id="academicsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="academicsDropdown"
                  style={{ display: showAcademicsDropdown ? "block" : "none" }}
                >
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={() => handleDropdownClick("/engineering")}
                    >
                      Faculty of Engineering
                    </span>
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={() => handleDropdownClick("/education")}
                    >
                      Faculty of Education
                    </span>
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={() => handleDropdownClick("/business")}
                    >
                      Faculty of Business
                    </span>
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={() => handleDropdownClick("/medicine")}
                    >
                      Faculty of Medicine & Health Sciences
                    </span>
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={() => handleDropdownClick("/law")}
                    >
                      Faculty of Law
                    </span>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
