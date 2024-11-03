import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./header.scss";
const Links = ({ isOnHeader, handleMenu }) => {
  return (
    <nav className={`links ${isOnHeader ? "isOnHeader" : ""}`}>
      <NavLink
        className="link"
        exact="true"
        to="/"
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
        onClick={handleMenu}
      >
        Work
      </NavLink>
      <NavLink
        className="link"
        to="/about"
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
        onClick={handleMenu}
      >
        About
      </NavLink>
      <a
        href="https://www.linkedin.com/in/giorgos-iliopoulos-389704193/"
        target="_blank"
        rel="noopener noreferrer"
        className="link-reset button-container"
      >
        <div style={{ backgroundColor: "red" }}>
          <FontAwesomeIcon icon={faLinkedin} size="10x" />
        </div>
      </a>
    </nav>
  );
};

export default Links;
