import ExtrasButton from "../../../components/extras button/ExtrasButton";
import SectionTitle from "../../../components/section-title/SectionTitle";
import Project from "./project/Project";
import "./projects.scss";
import { projectList } from "../../../assets/projectList";

const ProjectList = () => {
  const projectsArray = Object.entries(projectList).map(([key, value]) => ({
    ...value,
    route: key,
  }));
  return projectsArray.map((project, index) => {
    return <Project project={project} key={project.route} index={index} />;
  });
};

const Projects = () => {
  return (
    <div className="projects">
      <SectionTitle title={"Projects"} />
      <div className="project-list">
        <ProjectList />
      </div>
      <div className="extras-button-wrapper">
        <ExtrasButton />
      </div>
    </div>
  );
};

export default Projects;
