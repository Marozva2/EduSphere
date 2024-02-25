import React, { useState } from "react";
import { Link } from "react-router-dom";
import Engineering from "../components/Engineering";
function Header() {
    const [showAcademicsDropdown, setShowAcademicsDropdown] = useState(false);
    const [showAdmissionsDropdown, setShowAdmissionsDropdown] = useState(false);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="../../images/logo.png" alt="Logo" className="logo" style={{ width: "80px" }} />
                        <span className="d-none d-lg-inline">EduSphere</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About Us</Link>
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={() => setShowAcademicsDropdown(true)} onMouseLeave={() => setShowAcademicsDropdown(false)}>
                                <a className="nav-link dropdown-toggle" href="#academics" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Academics
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ display: showAcademicsDropdown ? 'block' : 'none' }}>
                                    <li><Link className="dropdown-item" to="/engineering">Faculty of Engineering</Link></li>
                                    <li><Link className="dropdown-item" to="/education">Faculty of Education</Link></li>
                                    <li><Link className="dropdown-item" to="/business">Faculty of Business</Link></li>
                                    <li><Link className="dropdown-item" to="/health">Faculty of Medicine & Health Sciences</Link></li>
                                    <li><Link className="dropdown-item" to="/law">Faculty of Law</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={() => setShowAdmissionsDropdown(true)} onMouseLeave={() => setShowAdmissionsDropdown(false)}>
                                <a className="nav-link dropdown-toggle" href="#admissions" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admissions
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ display: showAdmissionsDropdown ? 'block' : 'none' }}>
                                    <li><a className="dropdown-item" href="../../form/application-form.pdf" download>Download Application Form</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;