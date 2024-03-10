import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <h1 style={{ color: "maroon", paddingLeft: "30px", fontWeight: "100%" }}>Menu</h1>
      <Link className="sidebar-link" to="./">
        Home
      </Link>
      <Link className="sidebar-link" to="./feePayment">
        Fee Payment
      </Link>
      <Link className="sidebar-link" to="./courseWork">
        Course Work List
      </Link>
      <Link className="sidebar-link" to="./semRegistration">
        Semester Registration
      </Link>
      <Link className="sidebar-link" to="./examCards">
        Exam Cards
      </Link>
      <Link className="sidebar-link" to="./examResults">
        Exam Results
      </Link>
    </div>
  );
}

export default SideBar;
