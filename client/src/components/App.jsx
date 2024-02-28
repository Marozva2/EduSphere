import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Engineering from "./Engineering/Engineering.jsx";
import { About } from "./AboutUs.jsx";
import Education  from "./Education/Education.jsx";
import Health from "./Health/Health.jsx"
import Law from "./Law/Law.jsx"
import Business from "./Business/Business.jsx"
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (


    
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HeroSection />
                <Footer />
              </>
            }
          >
          </Route>

          {/* <Route exact path="/" element={<HeroSection />} /> */}

          <Route exact path="/engineering" element={<Engineering />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="education" element={<Education />} />
          <Route exact path="health" element={<Health />} />
          <Route exact path="law" element={<Law />} />
          <Route exact path="/business" element={<Business/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
