import React from "react";
import { Link } from "react-router-dom";
import Portrait from "../assets/images/pages/background.png";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home my-5">
      <div className="portrait">
        <img src={Portrait} alt="self portrait" />
      </div>
      <div className="title">
        <h1>Hi, I'm Abyou</h1>
        <p>Welcome to my Professional Portfolio!</p>
        <Link to="/projects">
          <button> <p>View My Projects</p> </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
