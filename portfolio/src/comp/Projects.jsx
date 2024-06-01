import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return ( <div className="projects">
    <header>MY <span>PROJECTS</span></header>
    <div className="items">
      {projects.map((p,i) => {
        return <ProjectCard project={p} key={i} />
      })}
    </div>
  </div> );
}

export default Projects;