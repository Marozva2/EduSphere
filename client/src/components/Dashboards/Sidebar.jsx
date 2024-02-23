import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar" data-color="white">
      <div className="logo">
        <a href="#" className="simple-text logo-mini">
          SD
        </a>
        <a href="#" className="simple-text logo-normal">
          Student Dashboard
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {/* Sidebar items */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
