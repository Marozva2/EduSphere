import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./NavBar.jsx";
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
  useState(localStorage.getItem("userRole") || null);

  useEffect(() => {
    getUserData().then((data) => setUserRole(data.role));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/admindash/*" element={<AdminDashboard />} />
        <Route path="/lecturerdash/*" element={<LecturerDashboard />} />
        <Route path="/studentdash/*" element={<StudentDashboard />} />
        {/* <Route
          path="/studentdash"
          element={
            userRole === "student" ? (
              <StudentDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
        {/* <Route
          path="/lecturerdash"
          element={
            userRole === "lecturer" ? (
              <LecturerDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
        <Route
          path="/admindash/*"
          element={
            userRole === "admin" ? <AdminDashboard /> : <Navigate to="/login" />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            userRole === "student" ? (
              <Navigate to="/studentdash/*" />
            ) : userRole === "lecturer" ? (
              <Navigate to="/lecturerdash/*" />
            ) : userRole === "admin" ? (
              <Navigate to="/admindash" />
            ) : (
              <>
                <Header />
                <HeroSection />
                <Footer />
              </>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
