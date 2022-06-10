import React, { useState } from "react";
import { useEffect } from "react";
import Project from "./Project";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <h1 class="text-5xl text-center my-5">Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12">
      {projects.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
      </div>
      
    </div>
  );
}

export default Projects;
