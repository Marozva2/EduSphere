import React from 'react';
import AdminNavbar from './AdminNavbar';
import Sidebar from './Sidebar';

const Admin = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel">
        <AdminNavbar />
        <div className="content">
          {/* Dashboard content */}
        </div>
      </div>
    </div>
  );
};

export default Admin;