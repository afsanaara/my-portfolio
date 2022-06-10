import React from "react";

function Project({project}) {
  return <div>
      <div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={project.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{project.name}</h2>
    <p>{project.title}</p>
    <div class="card-actions justify-end">
        <a href={project.live} target="_blank">
        <button class="btn btn-sm btn-primary">Live</button>
        </a>
        {project.code?.client && <a href={project.code.client} target="_blank">
        <button class="btn btn-sm btn-primary">Code</button>
        </a> }
        {project.code?.server && <a href={project.code.server} target="_blank">
        <button class="btn btn-sm btn-primary">Server Code</button>
        </a> }
      
    </div>
  </div>
</div>
  </div>;
}

export default Project;
