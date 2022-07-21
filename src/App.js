// import React from "react";
// import { createRoot } from "react-dom/client";
// import { HashRouter, Route } from "react-router-dom";

// import "./App.css";
// import Home from "./components/Home";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// const container = document.getElementById("app");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

// // import React from "react";
// // // import { HashRouter, Route } from "react-router-dom";
// // import "./App.css";

// // import Home from "./components/Home";
// // import Footer from "./components/Footer";
// // import Header from "./components/Header";

// function App() {
//   return (
//     <HashRouter basename="/">
//       <div className="app">
//         <Header />
//         <main>
//           <Route exact path="/" component={Home} />;
//         </main>
//         <Footer />
//       </div>
//     </HashRouter>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
