import ExtrasButton from "../../../components/extras button/ExtrasButton";
import SectionTitle from "../../../components/section-title/SectionTitle";
import Project from "./project/Project";
import "./projects.scss";
import learningAppImg from "../../../assets/images/project-images/learning.png";
import RickAppImage from "../../../assets/images/project-images/rick_morty.png";

const projects = [
  {
    name: "Learning App",
    img: learningAppImg,
    tags: ["React", " React Native"],
    link: "https://github.com/georgeiliop/learning-app",
  },
  {
    name: "Rick and Morty Finder App",
    img: RickAppImage,
    tags: ["React", "React Native"],
    link: "https://github.com/georgeiliop/Rick-Morty-finder-app",
  },
];

const ProjectList = () => {
  return projects.map((project, index) => {
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
