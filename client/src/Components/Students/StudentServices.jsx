// StudentServices.js
const BASE_URL = 'http://localhost:5000'; 

const StudentServices = {
  getAllStudents: async () => {
    const response = await fetch(`${BASE_URL}/students`);
    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }
    return response.json();
  },

  getStudentById: async (id) => {
    const response = await fetch(`${BASE_URL}/student/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch student with ID ${id}`);
    }
    return response.json();
  },

  addStudent: async (data) => {
    const response = await fetch(`${BASE_URL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to add student');
    }
    return response.json();
  },
};

export default StudentServices;
