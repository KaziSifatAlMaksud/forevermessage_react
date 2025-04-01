import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import Security from "./pages/Security_policy";
import Policy from "./pages/Policy";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="content" style={{ minHeight: "80vh"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsAndConditions />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/security" element={<Security />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
