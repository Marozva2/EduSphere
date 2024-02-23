import React from 'react';

function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} EduSphere</p>
                <p><a href="../../form/application-form.pdf" download>Download Application Form</a></p>
            </div>
        </footer>
    );
}

export default Footer;
