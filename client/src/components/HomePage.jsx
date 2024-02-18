import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        {/* <Header /> */}
        <HeroSection />
        {/* <Footer /> */}
     
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
