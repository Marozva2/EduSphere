import React, { useState } from "react";
import { Link } from "react-router-dom";
// import AboutUs from "./AboutUs.jsx";

function Header() {
  const [showAcademicsDropdown, setShowAcademicsDropdown] = useState(false);
  const [showAdmissionsDropdown, setShowAdmissionsDropdown] = useState(false);

  return (
    <header className="bg-light">
      <nav className="container mx-auto flex items-center justify-between py-5">
        <Link to="/" className="flex items-center">
          <img
            src="../../images/logo.png"
            alt="Logo"
            className="w-16 h-17 mr-5"
          />
          <span className="text-xl font-bold hidden lg:inline">EduSphere</span>
        </Link>
        <button className="block lg:hidden">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden lg:flex">
          <ul className="flex">
            <li className="nav-item">
              <Link to="/" className="nav-link hover:text-blue-500 px-4 py-2">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-link hover:text-blue-500 px-4 py-2"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item relative">
              <span
                className="nav-link hover:text-blue-500 px-4 py-2"
                onMouseEnter={() => setShowAcademicsDropdown(true)}
                onMouseLeave={() => setShowAcademicsDropdown(false)}
              >
                Academics
              </span>
              <ul
                className="dropdown-menu absolute hidden bg-white rounded-lg shadow-lg"
                style={{ display: showAcademicsDropdown ? "block" : "none" }}
              >
                <li>
                  <Link
                    to="/engineering"
                    className="dropdown-item hover:text-blue-500 px-4 py-2 block"
                  >
                    Faculty of Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/education"
                    className="dropdown-item hover:text-blue-500 px-4 py-2 block"
                  >
                    Faculty of Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business"
                    className="dropdown-item hover:text-blue-500 px-4 py-2 block"
                  >
                    Faculty of Business
                  </Link>
                </li>
                <li>
                  <Link
                    to="/health"
                    className="dropdown-item hover:text-blue-500 px-4 py-2 block"
                  >
                    Faculty of Medicine & Health Sciences
                  </Link>
                </li>
                <li>
                  <Link
                    to="/law"
                    className="dropdown-item hover:text-blue-500 px-4 py-2 block"
                  >
                    Faculty of Law
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item relative">
              <span
                className="nav-link hover:text-blue-500 px-4 py-2"
                onMouseEnter={() => setShowAdmissionsDropdown(true)}
                onMouseLeave={() => setShowAdmissionsDropdown(false)}
              >
                Admissions
              </span>
              <ul
                className="dropdown-menu absolute hidden bg-white rounded-lg shadow-lg"
                style={{ display: showAdmissionsDropdown ? "block" : "none" }}
              >
                <li>
                  <a
                    href="../../form/application-form.pdf"
                    download
                    className="dropdown-item hover:text-blue-500 px-4 py-2 block"
                  >
                    Download Application Form
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link hover:text-blue-500 px-4 py-2"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
