import project1 from "../assets/images/projects/project-1.png";
import project2 from "../assets/images/projects/project-2.png";
import project3 from "../assets/images/projects/project-3.png";
import project4 from "../assets/images/projects/project-4.png";
import project5 from "../assets/images/projects/project-5.png";
import project6 from "../assets/images/projects/project-6.png";

import "../styles/Lists.css";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const Lists = [
  {
    name: "Neighborhood Group Chat",
    image: project1,
    skills: "JavaScript, HTML, CSS, Handlebars, Node.js",
    link: (
      <div class="card-body">
        <a
          href="https://github.com/ghashe/Geo-Chat_Neighborhood-group-chat.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaGithub />
          </button>
        </a>
        <a
          href="https://geo-chat-neighborhoods.herokuapp.com/homepage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <CgWebsite />
          </button>
        </a>
      </div>
    ),
  },
  {
    name: "Weather Dashboard",
    image: project2,
    skills: "Semantic HTML, Open Weather API, jQuery, Moment.js",
    link: (
      <div class="card-body">
        <a
          href=" https://github.com/ghashe/weather-dashboard.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaGithub />
          </button>
        </a>
        <a
          href="https://ghashe.github.io/weather-dashboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <CgWebsite />
          </button>
        </a>
      </div>
    ),
  },
  {
    name: "Tech Blog",
    image: project3,
    skills:
      "HTML, CSS, JavaScript ES6, Node.js, Express.js, dotenv, MySQL, Sequelize,  bcrypt, handlebars, Heroku, JawsDB",
    link: (
      <div class="card-body">
        <a
          href="https://github.com/ghashe/model-view-controller-tech-blog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaGithub />
          </button>
        </a>
        <a
          href="https://aqueous-meadow-86713.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <CgWebsite />
          </button>
        </a>
      </div>
    ),
  },
  {
    name: "Note Taker Application",
    image: project4,
    skills: "HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, Uniqid",
    link: (
      <div class="card-body">
        <a
          href="https://github.com/ghashe/note-taker-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaGithub />
          </button>
        </a>
        <a
          href="https://powerful-sands-43746.herokuapp.com/notes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <CgWebsite />
          </button>
        </a>
      </div>
    ),
  },
  {
    name: "Work Day Scheduler",
    image: project5,
    skills: "JavaScript, Semantic HTMLHTML, CSS, Bootstrap, jQuery,  Moment.js",
    link: (
      <div class="card-body">
        <a
          href="https://github.com/ghashe/work-day-scheduler.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaGithub />
          </button>
        </a>
        <a
          href="https://ghashe.github.io/work-day-scheduler/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <CgWebsite />
          </button>
        </a>
      </div>
    ),
  },
  {
    name: "Trip Planner",
    image: project6,
    skills:
      "HTML, CSS, JavaScript, TailwindCSS, Open Weather API, Ticketmaster, positionstack",
    link: (
      <div class="card-body">
        <a
          href="https://github.com/SnowLune/trip-planner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaGithub />
          </button>
        </a>
        <a
          href="https://snowlune.github.io/trip-planner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <CgWebsite />
          </button>
        </a>
      </div>
    ),
  },
];
