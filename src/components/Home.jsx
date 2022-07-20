import React from "react";
import { Link } from "react-router-dom";
import Portrait from "../assets/images/backgroundTwo.png";

function Home() {
  return (
    <section className="home my-5">
      <div className="portrait">
        <img src={Portrait} alt="self portrait" />
      </div>
      <div className="title">
        <h1>Hi, I'm Abyou</h1>
        <p>Welcome to my Professional Portfolio!</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
