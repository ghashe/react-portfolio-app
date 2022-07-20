import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <main>
          <Home />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
