import { Link } from "react-router-dom";
import "./extras-button.scss";

const ExtrasButton = ({ scale, backToHome }) => {
  const text = backToHome ? "HOME!" : "EXTRA!";
  return (
    <Link
      to={backToHome ? "/" : "extra"}
      className="extras-button"
      style={scale ? { transform: `scale(${scale})` } : {}}
    >
      Î<div className={`text ${backToHome ? "back-to-home" : ""}`}>{text}!</div>
      <div className={`text ${backToHome ? "back-to-home" : ""}`}>{text}!</div>
      <div className={`text ${backToHome ? "back-to-home" : ""}`}>{text}!</div>
    </Link>
  );
};

export default ExtrasButton;