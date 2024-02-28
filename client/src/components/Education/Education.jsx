import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Education() {
  const carouselImages = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    
  ];

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
                <h1 className="h1eng">Faculty of Education</h1>
                <h2 className="h2eng">Empowering Future Educators</h2>
                <hr className="line"></hr>
                <h3 className="h3eng">Discover our education courses below</h3>
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
                  <h2>Courses</h2>
                  <ul className="department-list">
                    <li>Masters in Education</li>
                    <li>Masters in Education Psychology</li>
                    <li>Masters in Curriculum Development</li>
                    <li>Bsc. Mathematics and Chemistry</li>
                    <li>Bsc. Mathematics and Physics</li>
                    <li>Bsc. Applied Mathematics</li>
                    <li>Bachelor of Science (Physics & Chemistry)</li>
                    <li>Bsc. General Science</li>
                    <li>Bachelor of Arts (English & Literature)</li>
                    <li>Bachelor of Arts (Mathematics & Business)</li>
                    <li>Bachelor of Arts (Kiswahili & CRE)</li>
                    <li>Bachelor of Arts (Geography & Kiswahili)</li>
                    <li>Bachelor of Arts (History & CRE)</li>
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
                  <li>Engineering</li>
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
                autoPlayInterval={3500}
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
