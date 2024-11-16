import ExtrasButton from "../../../components/extras button/ExtrasButton";
import SectionTitle from "../../../components/section-title/SectionTitle";
import Project from "./project/Project";
import "./projects.scss";
import { projectList } from "../../../assets/projectList";
// const projects = [
//   {
//     route: "learning-app",
//     title: "Learning App",
//     img: learningAppImg,
//     tags: ["React"],
//     link: "https://github.com/georgeiliop/learning-app",
//   },
//   {
//     route: "rick-morty-finder",
//     title: "Rick and Morty Finder App",
//     img: RickAppImage,
//     tags: ["React"],
//     link: "https://github.com/georgeiliop/Rick-Morty-finder-app",
//   },
// ];

const ProjectList = () => {
  const projectsArray = Object.entries(projectList).map(([key, value]) => ({
    ...value,
    name: key,
  }));
  return projectsArray.map((project, index) => {
    return <Project project={project} key={project.name} index={index} />;
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
