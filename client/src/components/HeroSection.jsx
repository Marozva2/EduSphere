
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
<section className="hero">
<div className="hero-content">
<div className="text-content">
<h1>EduSphere</h1>
<p>Raising Next Gen Leaders</p>
<button className="apply-button" onClick={handleDownload}>
Apply for Course <span>&rarr;</span>
</button>
{downloadClicked && (
<a
href="../../form/application-form.pdf"
download="application_form.pdf"
style={{ display: 'none' }}
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
<div className="hero-image">
<Slider {...settings} ref={sliderRef}>
<div>
<img src={image1} alt="EduSphere Image 1" />
<button className="nav-button prev" onClick={goToPrev}>&lt;</button>
<button className="nav-button next" onClick={goToNext}>&gt;</button>
</div>
<div>
<img src={image2} alt="EduSphere Image 2" />
<button className="nav-button prev" onClick={goToPrev}>&lt;</button>
<button className="nav-button next" onClick={goToNext}>&gt;</button>
</div>
<div>
<img src={image3} alt="EduSphere Image 3" />
<button className="nav-button prev" onClick={goToPrev}>&lt;</button>
<button className="nav-button next" onClick={goToNext}>&gt;</button>
</div>
<div>
<img src={image4} alt="EduSphere Image 4" />
<button className="nav-button prev" onClick={goToPrev}>&lt;</button>
<button className="nav-button next" onClick={goToNext}>&gt;</button>
</div>
<div>
<img src={image5} alt="EduSphere Image 5" />
<button className="nav-button prev" onClick={goToPrev}>&lt;</button>
<button className="nav-button next" onClick={goToNext}>&gt;</button>
</div>
</Slider>
</div>
</section>
);
}

export default HeroSection;
