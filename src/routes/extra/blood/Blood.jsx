import { useEffect, useState } from "react";
import "./blood.scss";

const Blood = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);
  return (
    <div className={`blood ${active ? "active" : ""}`}>
      <div className="drip -d1"></div>
      <div className="drip -d2"></div>
      <div className="drip -d3"></div>
      <div className="drip -d5"></div>
      <div className="drip -d6"></div>
      <div className="drip -d11"></div>
      <div className="drip -d12"></div>
      <div className="drip -d13"></div>
      <div className="drip -d14"></div>
      <div className="drip -d15"></div>
    </div>
  );
};

export default Blood;
