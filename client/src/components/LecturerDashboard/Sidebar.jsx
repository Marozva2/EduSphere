import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
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
          <BsCart3 className="icon_header" /> EDUSPHERE
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
            <BsFillArchiveFill className="icon" /> Admin
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/lecturers">
            <BsPeopleFill className="icon" /> Lecturers
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
      </ul>
    </aside>
  );
}

export default Sidebar;
