import { useEffect, useState } from "react";
import "./intro.scss";
const Intro = () => {
  const [rotation, setRotation] = useState(45);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    const newRotation = Math.min(100, Math.max(45, scrollTop));

    setRotation(newRotation);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="intro">
      <h3 className="intro-text">
        Hi! My name is Giorgos Iliopoulos. I’m a front end engineer, based in
        Athens. My love for UI has led me to UX, design and development of web
        apps.
        <br />
        <br />
        I’m working towards bridging the gap between coding and design, becoming
        a unicorn if you will.
      </h3>
      <div className="text-icons-container">
        <div
          className="text-icon"
          style={{
            fontSize: `calc(84px + 8vw)`,
            // transform: "rotate(44deg)"
            transform: `rotate(${rotation}deg)`,
          }}
        >
          £
        </div>
        <div className="text-icon" style={{ fontSize: `calc(54px + 3vw)` }}>
          ]
        </div>
        <div className="text-icon" style={{ fontSize: `calc(84px + 8vw)` }}>
          c
        </div>
      </div>
    </div>
  );
};

export default Intro;
