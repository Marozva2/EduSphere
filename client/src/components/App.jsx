import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header.jsx";
import Engineering from "../components/Engineering.jsx";
import Education from "../components/Education.jsx";
import Business from "../components/Business.jsx";
import Health from "../components/Health.jsx";
import Law from "../components/Law.jsx";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          
          <Route exact path="/engineering" component={Engineering} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/business" component={Business} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/law" component={Law} />
          <Route exact path="/" component={HeroSection} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
