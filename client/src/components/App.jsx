import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Engineering from "../components/Engineering.jsx";
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
        <Header />
        <Routes>
        {/* <Route exact path="/" element={<HeroSection />} /> */}
          <Route exact path="/" element={<Engineering/>} />
          {/* <Route exact path="/education" component={Education} />
          <Route exact path="/business" component={Business} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/law" component={Law} /> */}
        </Routes>
        <HeroSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
