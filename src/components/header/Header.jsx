import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import Links from "./Links";
import "./header.scss";
import Menu from "./menu/Menu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 50; // scroll threshold
    if (currentScrollY === 0) {
      setIsSticky(false);
    } else if (
      currentScrollY > lastScrollY &&
      currentScrollY > 100 + scrollThreshold
    ) {
      // hide the header after the threshold
      setIsSticky(false);
    } else if (
      currentScrollY < lastScrollY &&
      currentScrollY > scrollThreshold
    ) {
      //show the header after the threshold
      setIsSticky(true);
    } else if (currentScrollY <= 100) {
      setIsSticky(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Fragment>
      <div
        className={`header ${showMenu ? "active" : ""} ${
          isSticky ? "sticky shadow-sm" : ""
        }`}
      >
        <Logo />
        <Links isOnHeader={true} />
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
