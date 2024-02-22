import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom"; 

function Business() {
 
  const [courseWork, setCourseWork] = useState([]);
  const [displayCourseWork, setDisplayCourseWork] = useState(false);
  const fetchCourseWork = async () => {
    try {
      const response = await fetch("/course-works");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); 
      setCourseWork(data); 
      setDisplayCourseWork(true); 
    } catch (error) {
      console.error("Error fetching course work:", error);
    }
  };  
  const handleEdusphereClick = () => {
    fetchCourseWork(); 
  };  
  useEffect(() => {
    fetchCourseWork(); 
  }, []); 

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>         
          <Nav.Link onClick={handleEdusphereClick}>
            Edusphere School of Economics
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">CourseWork</Nav.Link>
              <Nav.Link href="#link"></Nav.Link>         
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                {displayCourseWork &&
                  courseWork.map((course) => (
                    <NavDropdown.Item
                      key={course.id}
                      href={`#action/${course.id}`}
                    >
                      {course.course_name}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Business;
