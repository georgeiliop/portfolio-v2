import { useEffect } from "react";
import "./menu.scss";
import Links from "../Links";
import ExtrasButton from "../../extras button/ExtrasButton";

const Menu = ({ showMenu, setShowMenu }) => {
  const handleMenu = () => {
    // console.log("handle menu pressed", showMenu);
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("menu-open");
    };
  }, [showMenu]);

  return (
    <div className={`burger-menu-wrapper ${showMenu ? "active" : ""}`}>
      <div className="burgerMenu" onClick={handleMenu}>
        <span className="Line1"></span>
        <span className="Line2"></span>
        <span className="Line2"></span>
      </div>

      <div className={`menu ${showMenu ? "active" : ""}`}>
        <Links handleMenu={handleMenu} />
        <div className="extras-button-menu">
          <ExtrasButton scale={0.7} handleMenu={handleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
