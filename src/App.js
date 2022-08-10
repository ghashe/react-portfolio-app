import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Title from "./components/Title";
import ProjectDisplay from "./pages/ProjectDisplay";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Router basename="/react-portfolio-app" />
        <Navbar />
        <Title />

        <Routes>
          <Route exast path="/" element={<Home />} />
          <Route path="/home" exast element={<Home />} />
          <Route path="/projects" exast element={<Projects />} />
          <Route path="/project/:id" exast element={<ProjectDisplay />} />
          <Route path="/experience" exast element={<Experience />} />
          <Route path="/contact" exast element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
