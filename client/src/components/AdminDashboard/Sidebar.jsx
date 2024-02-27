import React from "react";
import {
  BsBackpackFill,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsDatabaseLock,
  BsPeopleFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
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
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsDatabaseLock className="icon" /> Admin
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/lecturers">
            <BsFillGrid3X3GapFill className="icon" /> Lecturers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/students">
            <BsPeopleFill className="icon" /> Students
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/courses">
            <BsFillArchiveFill className="icon" /> Courses
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/">
            <BsFillArchiveFill className="icon" /> Home
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
