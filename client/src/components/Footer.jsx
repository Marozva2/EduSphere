import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} EduSphere</p>
      <p><a href="form/form.pdf" download>Download Application Form</a></p>
    </footer>
  );
}

export default Footer;
