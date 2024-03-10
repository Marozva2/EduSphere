import React, { useState } from "react";
import {
  BsBackpackFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);
  const [lecturerDropdownOpen, setLecturerDropdownOpen] = useState(false);

  const toggleStudentDropdown = () => {
    setStudentDropdownOpen(!studentDropdownOpen);
  };

  const toggleLecturerDropdown = () => {
    setLecturerDropdownOpen(!lecturerDropdownOpen);
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsBackpackFill className="icon_header" /> EDUSPHERE
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a onClick={toggleStudentDropdown}>
            <BsPeopleFill className="icon" /> Students
          </a>
          {studentDropdownOpen && (
            <ul>
              <li>
                <a href="/admindash/students">Student List</a>
              </li>
              <li>
                <a href="/admindash/students/create">Enroll Student</a>
              </li>
              <li>
                <a href="/admindash/courses">Courses</a>
              </li>
              <li>
                <a href="/admindash/courses/create">Add Courses</a>
              </li>
              <li>
                <a href="/admindash/courses/edit/:id">Update Course</a>
              </li>
              <li>
                <a href="/admindash/fees">Fees</a>
              </li>
              <li>
                <a href="/admindash/fees/edit/:id">Update fees</a>
              </li>
              <li>
                <a href="/admindash/units">Units</a>
              </li>
              <li>
                <a href="/admindash/units/create">Create Units</a>
              </li>
              <li>
                <a href="/admindash/units/edit/:id">Update Units</a>
              </li>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item">
          <a onClick={toggleLecturerDropdown}>
            <BsFillGrid3X3GapFill className="icon" /> Lecturers
          </a>
          {lecturerDropdownOpen && (
            <ul>
              <li>
                <a href="/admindash/lecturers/">Lecturers list</a>
              </li>
              <li>
                <a href="/admindash/lecturers/parttime">Part Time</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
