import React, { useState } from "react";

function Header() {
    const [showAcademicsDropdown, setShowAcademicsDropdown] = useState(false);
    const [showAdmissionsDropdown, setShowAdmissionsDropdown] = useState(false);

    return (
        <header>
            <div className="header-section maroon-bg">
                <nav>
                    <ul>
                        <li>
                            <a href="#login">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-section white-bg">
                <div className="logo">
                    <img src="../../images/logo.png" alt="Logo" />
                    <li>
                        <a>EduSphere</a>
                    </li>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li onMouseEnter={() => setShowAcademicsDropdown(true)} onMouseLeave={() => setShowAcademicsDropdown(false)}>
                            <a href="#academics">Academics</a>
                            <ul className="dropdown" style={{ display: showAcademicsDropdown ? 'block' : 'none' }}>
                                <li>
                                    <a href="#engineering">Faculty of Engineering</a>
                                </li>
                                <li>
                                    <a href="#education">Faculty of Education</a>
                                </li>
                                <li>
                                    <a href="#business">Faculty of Business</a>
                                </li>
                                <li>
                                    <a href="#health">Faculty of Medicine & Health Sciences</a>
                                </li>
                                <li>
                                    <a href="#law">Faculty of Law</a>
                                </li>
                            </ul>
                        </li>
                        <li onMouseEnter={() => setShowAdmissionsDropdown(true)} onMouseLeave={() => setShowAdmissionsDropdown(false)}>
                            <a href="#admissions">Admissions</a>
                            <ul className="dropdown" style={{ display: showAdmissionsDropdown ? 'block' : 'none' }}>
                                <li>
                                    <a href="../../form/application-form.pdf" download>Download Application Form</a>
                                </li>
                                <li>
                                    <a href="#apply">Apply</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
