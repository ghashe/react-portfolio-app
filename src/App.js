import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
