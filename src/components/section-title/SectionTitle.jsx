import "./section-title.scss";

const SectionTitle = ({ title, size }) => {
  return <div className={`title ${size ? size : ""}`}>{title}</div>;
};

export default SectionTitle;
