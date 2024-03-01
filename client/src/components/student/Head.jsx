import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="../../images/logo.png"
              alt="Logo"
              className="logo"
              style={{ width: "80px" }}
            />
            <span className="d-none d-lg-inline">EduSphere</span>
          </Link>

          <div>
            <ul>
              <Link to="/">
                <h2>Home</h2>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
