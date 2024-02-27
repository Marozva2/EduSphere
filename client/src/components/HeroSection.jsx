import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';
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
autoplaySpeed: 2000,
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
<section id ="home "className="hero">
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

{/* Section ya About Us */}
<section id="about-us" className="about">
<div className="container" data-aos="fade-up">

<div className="section-header">
<h2>About Us</h2>
<h1>Learn More <span>About Us</span></h1>
</div>

<div className="row gy-4">
<div className="col-lg-7 position-relative about-img" style={{backgroundImage: 'url(../../../../images/8.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '80%'}} data-aos="fade-up" data-aos-delay="150">
<div className="call-us position-absolute" style={{borderRadius: '12px', width: '60%', height: '20%'}}>
<div className="call-us-writing position-absolute">
<h2 className="ca" style={{fontSize: '18px'}}>Call Admissions</h2>
<h1 id="h11" style={{fontSize: '20px', color: 'maroon'}}> 020-023 799100</h1>
</div>
</div>
</div>
<div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
<div className="content ps-0 ps-lg-5">
<p className="fst-italic">

</p>
<ul>
<li><i className="bi bi-check2-all"></i> Student Centred</li>
<li><i className="bi bi-check2-all"></i> Wholistic Learning Approach</li>
<li><i className="bi bi-check2-all"></i>Best Facilities </li>
</ul>
<p>
EduSphere University is not just any ordinary Institution.We are distinctive in our performance
and take charge of our student's learning. For the service of God and humanity
</p>
</div>
</div>
</div>
</div>
</section>




{/* Testimonials SECTION */}


<section id="testimonials" className="testimonials section-bg">
<div className="container" data-aos="fade-up">
<div className="section-header">
<h2>Testimonials</h2>
<h3>What do Alumni <span>Say About Us</span></h3>
</div>

<div className="testimonials-carousel swiper" data-aos="fade-up" data-aos-delay="100">
<div className="swiper-wrapper">

<div className="swiper-slide">
<div className="testimonial-item">
<div className="row gy-4 justify-content-center">
<div className="col-lg-6">
<div className="testimonial-content">
<p>
<i className="bi bi-quote quote-icon-left"></i>
“The skills I gained from Edusphere were numerous and I can attest that they have helped me transition into the job market seamlessly. Would definitely recommend the institution all time.”
<i className="bi bi-quote quote-icon-right"></i>
</p>
<h3>Field Marshall</h3>
<h4>Alumni &amp; Valedictorian</h4>
<div className="stars">
<i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
</div>
</div>
</div>
<div className="col-lg-2 text-center">
<img src="../../images/testimonials-1.jpg" className="img-fluid testimonial-img" alt="testimonial-image1" />
</div>
</div>
</div>
</div>

<div className="swiper-slide">
<div className="testimonial-item">
<div className="row gy-4 justify-content-center">
<div className="col-lg-6">
<div className="testimonial-content">
<p>
<i className="bi bi-quote quote-icon-left"></i>
“Edusphere is a powerhouse. You won't understand unless you are in it. ”

<i className="bi bi-quote quote-icon-right"></i>
</p>
<h3>Kayjay Nandi</h3>
<h4>Alumni</h4>
<div className="stars">
<i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
</div>
</div>
</div>
<div className="col-lg-2 text-center">
<img src="../../images/testimonials-2.jpg" className="img-fluid testimonial-img" alt="testimonial-image2" />
</div>
</div>
</div>
</div>


<div className="swiper-slide">
<div className="testimonial-item">
<div className="row gy-4 justify-content-center">
<div className="col-lg-6">
<div className="testimonial-content">
<p>
<i className="bi bi-quote quote-icon-left"></i>
“I went, I studied, I gained confidence, now I lead an entire 5000 employee company. Hail Edusphere”
<i className="bi bi-quote quote-icon-right"></i>
</p>
<h3>Emma Bostian</h3>
<h4>VC Director McHenry Group</h4>
<div className="stars">
<i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
</div>
</div>
</div>
<div className="col-lg-2 text-center">
<img src="../../images/testimonials-3.jpg" className="img-fluid testimonial-img" alt="testimonial-image3" />
</div>
</div>
</div>
</div>


<div className="swiper-slide">
<div className="testimonial-item">
<div className="row gy-4 justify-content-center">
<div className="col-lg-6">
<div className="testimonial-content">
<p>
<i className="bi bi-quote quote-icon-left"></i>
“The world is yet to see the rise of an education giant. Proud to be a part”

<i className="bi bi-quote quote-icon-right"></i>
</p>
<h3>Talia Mar</h3>
<h4>Entrepreneur</h4>
<div className="stars">
<i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
</div>
</div>
</div>
<div className="col-lg-2 text-center">
<img src="../../images/testimonials-4.jpg" className="img-fluid testimonial-img" alt="testimonial-image4" />
</div>
</div>
</div>
</div>

</div>
<div className="swiper-pagination"></div>
</div>
</div>
</section>


</>
);
}

export default HeroSection;