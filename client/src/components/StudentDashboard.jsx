import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Head from "/admin/Head"; 
// import Sidebar from "admin/Sidebar";
// import Home from "admin/Home";
// import "admin.css";

import CourseList from "/CourseManagement/CourseList";
import CourseEdit from "CourseManagement/courses/CourseEdit";
import CourseCreate from "CourseManagement/courses/CourseCreate";



import SemesterList from "CourseSemesterManagement/semesters/SemesterList";
import SemesterEdit from "CourseSemesterManagement/semesters/SemesterEdit";
import SemesterCreate from "CourseSemesterManagement/semesters/SemesterCreate";


import UnitList from "admin/units/UnitList";
import UnitEdit from "admin/units/UnitEdit";
import UnitCreate from "admin/units/UnitCreate";




function StudentDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div>
      <Head OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<CourseList />} />
        <Route path="courses/edit/:id" element={<CourseEdit />} />
        <Route path="courses/create" element={<CourseCreate />} />      

        <Route path="semesters" element={<SemesterList />} />
        <Route path="semesters/create" element={<SemesterCreate />} />
        <Route path="semesters/edit/:id" element={<SemesterEdit />} />

        <Route path="units" element={<UnitList />} />
        <Route path="units/create" element={<UnitCreate />} />
        <Route path="units/edit/:id" element={<UnitEdit />} />

        
      </Routes>
    </div>
  );
}

export default StudentDashboard;
