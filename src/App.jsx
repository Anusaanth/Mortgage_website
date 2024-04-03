import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { Calculator } from "./components/calculator";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {" "}
          <Route
            exact
            path="/"
            element={
              <>
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <Services data={landingPageData.Services} />
                <Testimonials data={landingPageData.Testimonials} />
                <Contact data={landingPageData.Contact} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About data={landingPageData.About} />
                <Gallery data={landingPageData.Gallery} />
              </>
            }
          />
          <Route
            path="/services"
            element={<Services data={landingPageData.Services} />}
          />
          <Route
            path="/calculator"
            element={
              <>
                <Calculator data={landingPageData.About} />
              </>
            }
          />
          <Route
            path="/contact"
            element={<Contact data={landingPageData.Contact} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
