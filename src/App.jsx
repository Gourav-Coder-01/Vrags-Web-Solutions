import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Our_process from "./Components/Our_process";
import Portfolio from "./Components/Portfolio";
import WhyChooseUs from "./Components/WhyChooseUs";
import Testimonials from "./Components/Testimonials";
import Faq from "./Components/faq";
import Footer from "./Components/Footer";

const App = () => (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Services/>
  <Our_process/>
  <Portfolio/>
  <WhyChooseUs/>
  <Testimonials/>
  <Faq/>
  <Footer/>
  </>
);

export default App;
