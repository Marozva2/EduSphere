import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// import facultimage from "../../../images/l7.jpg"" 

function Education() {
  const carouselImages = ["image1.jpg", "image2.jpg", "image3.jpg"];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Header />

      <section className="landing-section" style={{ backgroundImage: `url(${facultyImage})` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="landing-content">
                <h1 className="h1eng">Faculty of Education</h1>
                <h2 className="h2eng">We are raising the next generation educators</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faculty-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="faculty-info">
                <h2>About the Faculty</h2>
                <p>
                  This is the best faculty so far raising the best educators in the industry.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dean-info">
                <img src={deanImage} alt="Dean" className="dean-image" />
                <p>Meet the Dean - Dr. Kitetu Philemon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="departments-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="departments-box">
                <div className="departments">
                  <h2>Departments</h2>
                  <ul className="department-list">
                    <li>Masters in Education</li>
                    <li>Masters in Education Psychology</li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="explore-programs">
                <h2>Explore Our Other Programs</h2>
                <ul className="programs-list">
                  <li><Link to="/medicine">Medicine</Link></li>
                  <li><Link to="/business">Business</Link></li>
                  <li><Link to="/engineering">Engineering</Link></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="gallery-title">Gallery</h2>
          <div className="row">
            <div className="col-md-12">
              <AliceCarousel
                items={carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="carousel-image"
                    alt={`Image ${index + 1}`}
                  />
                ))}
                responsive={responsive}
                autoPlay
                autoPlayInterval={3000}
                duration={1000}
                fadeOutAnimation={true}
                disableButtonsControls
                disableDotsControls
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Education;
