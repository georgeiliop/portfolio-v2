import { useEffect } from "react";
import "./project.scss";
import { useParams } from "react-router-dom";
import { projectList } from "../../assets/projectList";
import { Link } from "@mui/icons-material";
import Tag from "../../components/tag/Tag";
import Section from "./section/Section";
import SectionTitle from "../../components/section-title/SectionTitle";

const Tags = ({ tags }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => {
        return <Tag tag={tag} key={tag + index} />;
      })}
    </div>
  );
};

const DesignSection = ({ designContent }) => {
  return (
    <section>
      <div className="section-title">
        <SectionTitle title={"Design"} />
      </div>

      {designContent.map((section, index) => {
        return (
          <Section
            img={section.img}
            description={section.description}
            subtitle={section.subtitle}
            subtitleDescription={section.subtitleDescription}
            isLast={designContent.length === index + 1}
          />
        );
      })}
      <div className="icons-container single-icon">
        <div className="icon ">J</div>
      </div>
    </section>
  );
};

const CodeSection = ({ codeContent }) => {
  return (
    <section>
      <div className="section-title">
        <SectionTitle title={"Code"} />
      </div>

      {codeContent.map((section, index) => {
        return (
          <Section
            img={section.img}
            description={section.description}
            subtitle={section.subtitle}
            subtitleDescription={section.subtitleDescription}
            isLast={codeContent.length === index + 1}
          />
        );
      })}
      <div className="icons-container">
        <div className="icon ">5</div>
        <div className="icon ">6</div>
      </div>
    </section>
  );
};
const Project = () => {
  const { projectName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the data for the current project
  const project = projectList[projectName];

  // If the project doesn't exist, show a 404 message
  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="project-page">
      <div className="intro-container">
        <div className="title">
          <h1>
            {`${project.number}  ${project.title}`}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <Link fontSize="inherit" />
            </a>
          </h1>
        </div>

        <Tags tags={project.tags} />
        <p>{project.description}</p>
        <img src={project.imageUrl} alt={project.title} />

        <div className="icons-container">
          <div className="icon">n</div>
          <div className="icon horse">?</div>
        </div>
      </div>
      <div className="content-wrapper">
        {project.designContent && (
          <DesignSection designContent={project.designContent} />
        )}
        {project.codeContent && (
          <CodeSection codeContent={project.codeContent} />
        )}
      </div>
    </div>
  );
};

export default Project;
