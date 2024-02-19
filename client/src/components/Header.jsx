
import React from "react";

function Header() {
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
<li>
<a href="#academics">Academics</a>
<ul className="dropdown">
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
<li>
<a href="#admissions">Admissions</a>
<ul className="dropdown">
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
