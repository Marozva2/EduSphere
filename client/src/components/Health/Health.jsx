import React from 'react';
import Header from "../Header"
import Footer from "../Footer"
// import {Link} from "react-router-dom"

function Health() {
  return (
    <div>
    <Header />
      <h1>Health Departments and Courses</h1>
      <h2>Nursing</h2>
      <ul>
        <li>PhD in Nursing</li>
        <li>Masters in Nursing</li>
        <li>Bachelor of Nursing</li>
      </ul>

      <h2>Medicine and Surgery</h2>
      <ul>
        <li>Masters in Medicine and Surgery</li>
        <li>Bachelor of Medicine and Surgery</li>
      </ul>

      <h2>Pharmacy</h2>
      <ul>
        <li>PhD in Pharmacy</li>
        <li>Masters in Pharmacy</li>
        <li>Bachelor of Pharmacy</li>
      </ul>

      <h2>Clinical Medicine</h2>
      <ul>
        <li>Masters in Clinical Medicine</li>
        <li>Bachelor of Clinical Medicine</li>
        <li>Diploma in Clinical Medicine</li>
        <li>Certificate in Clinical Procedures</li>
      </ul>

      <h2>Family Medicine</h2>
      <ul>
        <li>Masters in Family Medicine</li>
      </ul>

      <h2>Nutrition and Dietetics</h2>
      <ul>
        <li>Masters in Nutrition and Dietetics</li>
        <li>Bachelor of Nutrition and Dietetics</li>
        <li>Diploma in Nutrition and Dietetics</li>
        <li>Certificate in Nutrition and Dietetics</li>
      </ul>
      <Footer />
    </div>
  );
}

export default Health;
