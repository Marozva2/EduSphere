import React from 'react';
import Header from "../Header"
import Footer from "../Footer"

function Business() {
  return (
    <div>
    <Header />
      <h1>Business School Departments and Courses</h1>
      <h2>Finance</h2>
      <ul>
        <li>PhD in Finance</li>
        <li>Masters in Finance</li>
        <li>Bachelor of Business Administration (BBA) in Finance</li>
        <li>Diploma in Finance</li>
        <li>Certificate in Financial Management</li>
      </ul>

      <h2>Marketing</h2>
      <ul>
        <li>PhD in Marketing</li>
        <li>Masters in Marketing</li>
        <li>Bachelor of Business Administration (BBA) in Marketing</li>
        <li>Diploma in Marketing</li>
        <li>Certificate in Marketing Strategy</li>
      </ul>

      <h2>Human Resource Management</h2>
      <ul>
        <li>PhD in Human Resource Management</li>
        <li>Masters in Human Resource Management</li>
        <li>Bachelor of Business Administration (BBA) in Human Resource Management</li>
        <li>Diploma in HR Management</li>
        <li>Certificate in Organizational Behavior</li>
      </ul>

      <h2>Entrepreneurship</h2>
      <ul>
        <li>PhD in Entrepreneurship</li>
        <li>Masters in Entrepreneurship</li>
        <li>Bachelor of Business Administration (BBA) in Entrepreneurship</li>
        <li>Diploma in Entrepreneurship</li>
        <li>Certificate in Startup Management</li>
      </ul>

      <h2>Operations Management</h2>
      <ul>
        <li>PhD in Operations Management</li>
        <li>Masters in Operations Management</li>
        <li>Bachelor of Business Administration (BBA) in Operations Management</li>
        <li>Diploma in Supply Chain Management</li>
        <li>Certificate in Project Management</li>
      </ul>
      <Footer />
    </div>
  );
}

export default Business;
