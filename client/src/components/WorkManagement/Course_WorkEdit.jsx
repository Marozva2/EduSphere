import React, { useState } from 'react';

const Course_WorkEdit = () => {
  const [courseWorkDetails, setCourseWorkDetails] = useState({
    title: '',
    description: '',
    deadline: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseWorkDetails({ ...courseWorkDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(courseWorkDetails); // Example: Log form data
  };

  return (
    <div>
      <h2>Edit Course Work</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={courseWorkDetails.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="description"
          value={courseWorkDetails.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="date"
          name="deadline"
          value={courseWorkDetails.deadline}
          onChange={handleChange}
        />
        {/* Add more input fields for other details */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Course_WorkEdit;

