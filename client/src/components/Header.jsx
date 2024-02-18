import React from 'react'

function Header() {
  return (
    <header>
        <div className="logo">
            <img src="../../images/logo.png" alt="Logo" />
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#student">Student Login</a></li>
                <li><a href="#staff">Staff Login</a></li>
                
            </ul>
        </nav>
    </header>
  )
}

export default Header