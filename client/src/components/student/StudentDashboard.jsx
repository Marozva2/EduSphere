import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "/src/components/Footer.jsx";
import Head from "./Head";
import Home from "./Home";
import SideBar from "./SideBar";
import FeePaymentList from "./feePayment/FeePaymentList";
import CourseWorkList from "./courseWork/CourseWorkList";
import SemRegistrationList from "./semRegistration/SemRegistrationList";
import ExamCardList from "./examCards/ExamCardList";
import ExamResults from "./examResults/ExamResults";

function StudentDashboard() {
  return (
    <div>
      <Head />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <SideBar />
        </div>
        <div className="col-span-9">
          <h1 style={{ color: "maroon", paddingLeft: "30px" }}>
            Student Dashboard
          </h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feePayment/" element={<FeePaymentList />} />
            <Route path="/courseWork/" element={<CourseWorkList />} />
            <Route path="/semRegistration/" element={<SemRegistrationList />} />
            <Route path="/examCards/" element={<ExamCardList />} />
            <Route path="/examResults/" element={<ExamResults />} />
          </Routes>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "410px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default StudentDashboard;
