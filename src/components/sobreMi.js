import React from "react";
import "../stylesheet/sobremi.css";
import AboutTerminal from "./useTypedLines";

const SobreMi = () => {
  return (
    <>
      <section id="sobre-mi" className="about-section">

        <div className="about-container">

          {/* LEFT */}
          <div className="about-content">

            <span className="about-subtitle">
              SOBRE MÍ
            </span>

            <h2 className="about-title">
              Desarrollador Web
              <span> Backend & Frontend</span>
            </h2>

          

            <AboutTerminal />

            <div className="about-buttons">

              <a href="#proyectos" className="btn-primary-custom">
                Ver proyectos
              </a>

              <a href="#contacto" className="btn-secondary-custom">
                Contacto
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="about-cards">

            <div className="glass-card">
              <h3>+3</h3>
              <p>Proyectos desarrollados</p>
            </div>

            <div className="glass-card">
              <h3>Laravel</h3>
              <p>Backend Framework</p>
            </div>

            <div className="glass-card">
              <h3>React</h3>
              <p>Frontend moderno</p>
            </div>

            <div className="glass-card">
              <h3>MySQL</h3>
              <p>Bases de datos</p>
            </div>

          </div>

        </div>

        {/* SKILLS */}

        <div className="skills-wrapper">

          <span>Laravel</span>
          <span>PHP</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>MySQL</span>
          <span>REST API</span>
          <span>Bootstrap</span>
          <span>Tailwind</span>

        </div>

      </section>
    </>

  );
};

export default SobreMi;