import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Head from "./Head";
import Sidebar from "./Sidebar";
import Home from "./Home";
import "./admin.css";

import CourseList from "./courses/CourseList";
import CourseEdit from "./courses/CourseEdit";
import CourseCreate from "./courses/CourseCreate";

import StudentList from "./students/StudentList";
import StudentEdit from "./students/StudentEdit";
import StudentCreate from "./students/StudentCreate";

import SemesterList from "./semesters/SemesterList";
import SemesterEdit from "./semesters/SemesterEdit";
import SemesterCreate from "./semesters/SemesterCreate";

import UnitList from "./units/UnitList";
import UnitEdit from "./units/UnitEdit";
import UnitCreate from "./units/UnitCreate";

import FeeList from "./fees/FeeList";
import FeeEdit from "./fees/FeeEdit";

import LecturerCreate from "./lecturers/CreateLecturer";
import LecturerList from "./lecturers/LecturerList";
import EditLecturer from "./lecturers/EditLecturer";

function AdminDashboard() {
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

        <Route path="students" element={<StudentList />} />
        <Route path="students/create" element={<StudentCreate />} />
        <Route path="students/edit/:id" element={<StudentEdit />} />

        <Route path="semesters" element={<SemesterList />} />
        <Route path="semesters/create" element={<SemesterCreate />} />
        <Route path="semesters/edit/:id" element={<SemesterEdit />} />

        <Route path="units" element={<UnitList />} />
        <Route path="units/create" element={<UnitCreate />} />
        <Route path="units/edit/:id" element={<UnitEdit />} />

        <Route path="fees" element={<FeeList />} />
        <Route path="fees/edit/:id" element={<FeeEdit />} />

        <Route path="lecturers" element={<LecturerList />} />
        <Route path="lecturer/create" element={<LecturerCreate />} />
        <Route path="lecturers/edit/:id" element={<EditLecturer />} />
      </Routes>
    </div>
  );
}

export default AdminDashboard;
