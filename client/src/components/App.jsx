import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.jsx";
import SignIn from "/src/components/sign in and sign up/SignIn.jsx";
import SignUp from "/src/components/sign in and sign up/SignUp.jsx";
import AdminDashboard from "/src/components/admin/AdminDashboard.jsx";
import LecturerDashboard from "/src/components/lecturer/LecturerDashboard.jsx";
import StudentDashboard from "/src/components/student/StudentDashboard.jsx";

async function getUserData() {
  const response = await fetch("http://127.0.0.1:5000/users");
  const data = await response.json();
  return data;
}

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    getUserData().then((data) => setUserRole(data.role));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/student"
          element={
            userRole === "student" ? <StudentDashboard /> : <Navigate to="/" />
          }
        />
        <Route
          path="/lecturer"
          element={
            userRole === "lecturer" ? (
              <LecturerDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            userRole === "admin" ? <AdminDashboard /> : <Navigate to="/login" />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admindash/*" element={<AdminDashboard />} />
        <Route path="/studentdash/*" element={<StudentDashboard />} />
        <Route path="/lecturerdash/*" element={<LecturerDashboard />} />

        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
