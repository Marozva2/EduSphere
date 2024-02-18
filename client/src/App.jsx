import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CourseCard from "./components/CourseCard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" component={Header}/>
          <Route exact path="/courses" component={CourseCard} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
