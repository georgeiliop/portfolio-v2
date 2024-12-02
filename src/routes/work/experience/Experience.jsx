import SectionTitle from "../../../components/section-title/SectionTitle";
import JobAchievement from "./job-achievement/JobAchievement";
import JobInfo from "./job-info/JobInfo";
import "./experience.scss";
import Tag from "../../../components/tag/Tag";

const achievements = [
  "Played a key role in successfully implementing and delivering critical features for a mobile application.",
  "Optimized legacy features for improved performance, UI, and UX.",
  "Collaborated closely with colleagues and stakeholders to deliver solutions aligned with company goals and brand identity.",
];

const tags = [
  "React Native",
  "UI/UX",
  "Figma",
  "Reanimated",
  "React Native Paper",
];

const Experience = () => {
  return (
    <div className="experience">
      <SectionTitle title={"work experience"} />
      <JobInfo />
      <div className="achievements-container">
        {achievements.map((achievement) => {
          return <JobAchievement achievement={achievement} key={achievement} />;
        })}
      </div>

      <div className="tags-container">
        {tags.map((tag, index) => {
          return <Tag tag={tag} key={tag + index} />;
        })}
      </div>
      <div className="tire-container">
        <div className="tire-icon">@</div>
      </div>
    </div>
  );
};

export default Experience;
