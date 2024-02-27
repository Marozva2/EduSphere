import { BsPeopleFill, BsFillBellFill } from "react-icons/bs";
import LecturerCreate from "/src/components/Lecturer/CreateLec.jsx";
import CourseList from "../Courses/CourseList";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className="bg-dark text-white">DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>STUDENTS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>8300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>LECTURERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>212</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>SCHOOLS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>74</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>UPDATES</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>7</h1>
        </div>
      </div>
      <LecturerCreate />
      <CourseList />
    </main>
  );
}

export default Home;
