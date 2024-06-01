import demoPic from '../images/protSample.png'
import open from '../icons/open.svg'

function ProjectCard({project}) {
  return ( <div className="project_card">
    <div className="details">
      <header>{project.name}</header>
      <div className="tech_stack">
        <span>Tech Stack: </span>
        {project.techStack}
      </div>
      <div className="desc"> {project.desc} </div>
      <div className="options">
        <a href={project.live} target="_blank"> <button className="live">Live
          <img src={open} alt="" />
        </button> </a>
        <a href={project.source} target="_blank">
          <button className="source">Source <span>{'</>'}</span></button>
        </a>
      </div>
    </div>
    <div className="image">
    <img src={project.img} alt="" />
    </div>
  </div> );
}

export default ProjectCard;