import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';

function HeroSection() {
  const [downloadClicked, setDownloadClicked] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    rtl: true,
  };

  const handleDownload = () => {
    setDownloadClicked(true);
  };


  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-content">
              <div className="text-content">
                <h1 className="edusphere-title">EDUSPHERE</h1>
                <h1 className="edusphere-title2">University</h1>
                <p>EduSphere University is not just any ordinary Institution.We are distinctive in our performance 
                and take charge of our student's learning. For the service of God and humanity </p>
                <button className="apply-button"
                onClick={handleDownload}>
                  Apply for Course <span>&rarr;</span>
                </button>
                {downloadClicked && (
                  <a
                    href="../../form/application-form.pdf"
                    download="application_form.pdf"
                    style={{ display: 'none'}}
                    ref={(ref) => {
                      if (ref) {
                        ref.click();
                        setDownloadClicked(false);
                      }
                    }}
                  >
                    Download
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero-image">
              <Slider {...settings} ref={sliderRef}>
                <div>
                  <img src={image1} alt="EduSphere Image 1" />
                </div>
                <div>
                  <img src={image2} alt="EduSphere Image 2" />
                </div>
                <div>
                  <img src={image3} alt="EduSphere Image 3" />
                </div>
                <div>
                  <img src={image4} alt="EduSphere Image 4" />
                </div>
                <div>
                  <img src={image5} alt="EduSphere Image 5" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <hr></hr>
    {/* About Us Section */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>About Us</h2>
          <h1>Learn More <span>About Us</span></h1>
        </div>

        <div className="row gy-4">
          <div className="col-lg-7 position-relative about-img" style={{backgroundImage: 'url(../..images/12.jpg)'}} data-aos="fade-up" data-aos-delay="150">
            <div className="call-us position-absolute">
              <h2>Order from Us</h2>
              <h1> 07 4779 1243</h1>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                We are a small family-run local business, located and operating in Cairville for 5 years. We have,
                however, over 25 years of experience in floristry. We are hoping to improve our business by getting
                on the Internet. Our florist shop is located at 223 Bolsover St. We offer the exceptional quality and
                choice of fresh flowers & foliage tailor-made to suit any occasion. We also do next-day home
                delivery (as long as the order is made by 3pm the day before).
              </p>
              <ul>
                <li><i className="bi bi-check2-all"></i> Exceptional Quality</li>
                <li><i className="bi bi-check2-all"></i> Fresh Flowers</li>
                <li><i className="bi bi-check2-all"></i> Next Day Home Delivery (3PM)</li>
              </ul>
              <p>
               We have the best flowers in town, tailored for you so don't hesitate to order from us. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}

export default HeroSection;
