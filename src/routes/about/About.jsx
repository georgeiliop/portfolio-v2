import { useEffect } from "react";
import "./about.scss";
import pic from "../../assets/images/profile-pic.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="content-container">
        <div className="img-wrapper">
          <div className="sparkle-icon">]</div>
          <div className="img">
            <img loading="lazy" src={pic} alt="profile"></img>
          </div>
        </div>

        <div className="profile-text-wrapper">
          <p className="profile-text">
            I was born and raised near the waves in Preveza, and currently live
            in Athens. I’m a frontend developer, working towards bridging the
            gap between coding and design.
          </p>
          <p className="profile-text">
            Growing up on games, music and movies I always looked at the
            interfaces that helped me get entertained or get things done. It
            motivated me to engage and see how to create something useful and
            beautiful.
          </p>
          <p className="profile-text">
            I have worked with great developers and designers, that taught me
            what it takes to be a good team member and what a good app looks
            like from top to bottom.
          </p>

          <p className="profile-text">
            When I’m not creating, I might be watching movies, listening to
            music or crafting and drawing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
