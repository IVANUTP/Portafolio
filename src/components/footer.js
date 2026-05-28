import React from "react";
import "../stylesheet/footer.css";
import icono from "../img/icono-blanco.png";

const Footer = () => {
  return (

    <footer className="footer">

      <div className="footer-content">

        {/* LOGO */}

        <img
          className="footer-logo"
          src={icono}
          alt="Logo del portafolio"
        />

        {/* TEXT */}

        <h3>
          Ángel Iván García
        </h3>

        <p className="footer-text">
          Desarrollador web enfocado en Laravel,
          React y desarrollo de aplicaciones modernas.
        </p>

        {/* SOCIAL */}

        <div className="social-links">

          <a
            href="https://github.com/IVANUTP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/angel-garc%C3%ADa-flores-4a08722b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a href="mailto:TU_CORREO_AQUI@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>

        </div>

        {/* COPYRIGHT */}

        <div className="footer-copy">
          © 2026 Ángel Iván García Flores
        </div>

      </div>

    </footer>
  );
};

export default Footer;