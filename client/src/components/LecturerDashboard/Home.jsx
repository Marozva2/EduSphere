import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import LecturerList from "../Lecturer/LecturerList"

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>STUDENTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>2300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>FACULTIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>49</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>DEPARTMENTS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>88</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>COURSES</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>242</h1>
        </div>
      </div>
    </main>
  );
}

export default Home;
