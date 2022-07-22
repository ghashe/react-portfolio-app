import React from "react";
import ProjectTopic from "../components/ProjectTopic";
import { Lists } from "../helpers/Lists";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="Lists">
        {Lists.map((project, idx) => {
          return (
            <ProjectTopic id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
