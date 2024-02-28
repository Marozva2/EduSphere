import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import l3 from "../../../images/l3.jpg";
import l4 from "../../../images/l4.jpg";
import l5 from "../../../images/l5.jpg";
import deanImage from "../../../images/steve.jpg" // Import the dean's image

function Engineering() {
  const carouselImages = [l3, l4, l5];
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

      <section
        className="landing-section"
        style={{ backgroundImage: `url(${l3})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="landing-content">
                <h1 className="h1eng">FACULTY OF ENGINEERING</h1>
                <h2 className="h2eng">Where Innovation meets Brilliance</h2>
                <hr className="line"></hr>
                <h3 className="h3eng">
                  Explore our departments and courses below
                </h3>
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
                  The Faculty of Engineering at Edusphere University is dedicated
                  to fostering innovation and excellence in engineering
                  education and research with state of the art facilities, hackathons and competitions that 
                  equip our learners with the right training fit for the global workplace. 
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dean-info">
                <img
                  src={deanImage}
                  alt="Dean"
                  className="dean-image"
                />
                <p>Meet the Dean - Dr. Steven Maarifa Otieno</p>
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
                    <li>Computer Science & IT</li>
                    <li>Actuarial Science</li>
                    <li>Telecommunications</li>
                    <li>Information Systems</li>
                    <li>Mechatronics Engineering</li>
                    <li>Electrical and Electronics Engineering</li>
                    <li>Civil Engineering</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="explore-programs">
                <h2>Explore Our Other Programs</h2>
                <ul className="programs-list">
                  <li>Medicine</li>
                  <li>Business</li>
                  <li>Education</li>
                  <li>Law</li>
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
                autoPlayInterval={2500} 
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

export default Engineering;
