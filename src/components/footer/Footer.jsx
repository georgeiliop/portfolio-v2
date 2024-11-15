import { useLocation } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const location = useLocation(); // Get the current location object

  return (
    <footer
      className={`footer ${location.pathname === "/extra" ? "hide" : ""}`}
    >
      <div className="text-wrapper">
        <p>
          I have been enjoying UI throughout my life, from my gaming consoles to
          all my phones and laptops. I guess its something that my brain chose
          to be excited about. Computer science student, country lover, horror
          movie enthusiast, walking enjoyer.
        </p>
        <p>Living and creating in Athens.</p>
      </div>

      <div className="button-wrapper">
        <a href="mailto:giliopp@gmail.com">
          <button>
            EMAIL
            <div className="button-selected">]</div>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/giorgos-iliopoulos-389704193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            LINKEDIN
            <div className="button-selected">]</div>
          </button>
        </a>
      </div>

      <div className="cactus-icon">%</div>
    </footer>
  );
};

export default Footer;
