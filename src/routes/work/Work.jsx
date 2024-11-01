import "./work.scss";
import Intro from "./intro/Intro";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="work">
      <Intro />
      <Experience />
      <Projects />
    </div>
  );
};

export default Work;
