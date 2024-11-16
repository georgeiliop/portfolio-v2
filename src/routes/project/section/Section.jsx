import SectionTitle from "../../../components/section-title/SectionTitle";
import "./section.scss";

const Section = ({ img, description, subtitle, subtitleDescription }) => {
  return (
    <div className="section">
      <div className="title">
        {subtitle && <h3>{subtitle}</h3>}
        {subtitleDescription && <p>{subtitleDescription}</p>}
      </div>
      <img src={img} alt={description} />
      <p>{description}</p>
    </div>
  );
};

export default Section;
