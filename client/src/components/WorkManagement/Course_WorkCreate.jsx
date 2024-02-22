import React, { useState } from 'react';

const Course_WorkCreate = () => {
  const [courseWork, setCourseWork] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseWork({ ...courseWork, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(courseWork);
  };

  return (
    <div>
      <h2>Create Course Work</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={courseWork.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="description"
          value={courseWork.description}
          onChange={handleChange}
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Course_WorkCreate;

