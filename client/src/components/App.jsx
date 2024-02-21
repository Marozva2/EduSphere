// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import Engineering from "./Engineering";
import Education from "./Education";
import Business from "./Business";
import Medicine from "./Medicine";
import Law from "./Law";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* <Route path="herosection" element={<HeroSection />} /> */}
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/education" element={<Education />} />
        <Route path="/business" element={<Business />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/law" element={<Law />} />
      </Routes>
      <HeroSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
