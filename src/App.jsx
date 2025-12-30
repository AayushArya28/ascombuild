import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Clients from "./pages/Clients";
import Awards from "./pages/Awards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="clients" element={<Clients />} />
          <Route path="awards" element={<Awards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
