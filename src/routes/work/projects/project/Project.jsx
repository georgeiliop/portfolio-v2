import Tag from "../../../../components/tag/Tag";
import "./project.scss";
const Project = ({ project, index }) => {
  const Tags = () => {
    return project.tags.map((tag) => {
      return <Tag tag={tag} key={tag + index} />;
    });
  };
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="link-reset"
    >
      <div className="project-container">
        <div className="project">
          <div className="info">
            <div className="project-number">
              {(index + 1).toString().padStart(2, "0")}
            </div>
            <div className="project-name">{project.name}</div>
          </div>
          <div className="tags">
            <Tags />
          </div>
        </div>
        <div className="hover-image-wrapper">
          <img src={project.img} className="hover-image" alt="project" />
        </div>
      </div>
    </a>
  );
};

export default Project;
