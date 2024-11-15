import { useLocation } from "react-router-dom";
import ExtrasButton from "../../components/extras button/ExtrasButton";
import Logo from "../../components/logo/Logo";
import Blood from "./blood/Blood";
import { FirstGrid, SecondGrid } from "./display-grid/DisplayGrid";
import "./extra.scss";
import FaveThingsList from "./fave-things-list/FaveThingsList";
import { useEffect } from "react";

const Extra = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/extra") {
      // Add class to body when the route is /extra
      document.body.classList.add("extra-route");
    }

    // Clean up class when component unmounts or route changes
    return () => {
      document.body.classList.remove("extra-route");
    };
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="extra">
      <header className="header">
        <div className="logo-container">
          <Logo />
          <Blood />
        </div>

        <h1 className="title">Welcome to my dumpsite for things I like.</h1>
      </header>

      <section className="content-container">
        <div className="top-row">
          <FaveThingsList />
          <FirstGrid />
        </div>
        <SecondGrid />
      </section>
      <div className="extras-button-container">
        <ExtrasButton backToHome={true} />
      </div>
    </div>
  );
};

export default Extra;
