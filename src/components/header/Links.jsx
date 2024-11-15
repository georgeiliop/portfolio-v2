import { NavLink } from "react-router-dom";

import "./header.scss";
import { LinkedIn } from "@mui/icons-material";
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
      {/* <div style={{ backgroundColor: "red" }}> */}
      <a
        href="https://www.linkedin.com/in/giorgos-iliopoulos-389704193/"
        target="_blank"
        rel="noopener noreferrer"
        className="link-reset button-container "
      >
        <LinkedIn fontSize="inherit" />
      </a>
      {/* </div> */}
    </nav>
  );
};

export default Links;
