import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
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
      <Grid>
        <Grid.Column width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={12}>
          <h1 style={{backgroundColor: 'maroon'}}>Student Dashboard</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feePayment/" element={<FeePaymentList />} />
            <Route path="/courseWork/" element={<CourseWorkList />} />
            <Route path="/semRegistration/" element={<SemRegistrationList />} />
            <Route path="/examCards/" element={<ExamCardList />} />
            <Route path="/examResults/" element={<ExamResults />} />
          </Routes>
        </Grid.Column>
      </Grid>
      <div style={{ position: "fixed", left: 0, bottom: 0, width: "100%", height: "410px"}}>
        <Footer />
      </div>
    </div>
  );
}

export default StudentDashboard;
