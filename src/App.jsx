import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Clients from "./pages/Clients";
import Awards from "./pages/Awards";
import Leadership from "./pages/Leadership";
import ScrollToTop from "./components/ScrollToTop";
import Skyscrapers from "./pages/Skyscrapers";
import Bridges from "./pages/Bridges";
import StructuralDesign from "./pages/StructuralDesign";
import Consultancy from "./pages/Consultancy";
import Testing from "./pages/Testing";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="clients" element={<Clients />} />
            <Route path="awards" element={<Awards />} />

            {/* New Service Pages */}
            <Route path="skyscrapers" element={<Skyscrapers />} />
            <Route path="bridges" element={<Bridges />} />
            <Route path="structural-design" element={<StructuralDesign />} />
            <Route path="consultancy" element={<Consultancy />} />
            <Route path="testing" element={<Testing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
