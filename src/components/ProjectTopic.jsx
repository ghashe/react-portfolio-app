import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectTopic({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="ProjectTopic"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectTopic;