// StudentForm.jsx
import React, { useState } from 'react';
import StudentServices from './StudentServices';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    // Add more form fields as needed
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to add student using formData
    StudentServices.addStudent(formData)
      .then((response) => {
        console.log('Student added successfully:', response);
        // Reset form fields after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          department: '',
        });
      })
      .catch((error) => {
        console.error('Error adding student:', error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </label>
       
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
