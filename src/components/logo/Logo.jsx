import { Link } from "react-router-dom";
import "./logo.scss";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      Giliop
    </Link>
  );
};

export default Logo;
