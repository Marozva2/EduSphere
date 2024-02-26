import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Engineering from "./Engineering/Engineering.jsx";
// import Education from "../components/Education.jsx";
// import Business from "../components/Business.jsx";
// import Health from "../components/Health.jsx";
// import Law from "../components/Law.jsx";
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

          {/* <Route exact path="/education" element={<Education/>} /> */}
          {/* <Route exact path="/business" element={<Business/>} />
          <Route exact path="/health" element={<Health/>} />
          <Route exact path="/law" element={<Law/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
