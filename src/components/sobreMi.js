import React from "react";
import "../stylesheet/sobremi.css";
import AboutTerminal from "./useTypedLines";
import laravel from "../img/laravel.png"

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

          <div className="skill-item">
            <i className="devicon-laravel-plain colored"></i>
          </div>

          <div className="skill-item">
            <i className="devicon-php-plain colored"></i>
          </div>

          <div className="skill-item">
            <i className="devicon-react-original colored"></i>
          </div>

          <div className="skill-item">
            <i className="devicon-javascript-plain colored"></i>
          </div>

          <div className="skill-item">
            <i className="devicon-mysql-original colored"></i>
          </div>

          <div className="skill-item">
            <i className="devicon-bootstrap-plain colored"></i>
          </div>

          <div className="skill-item">
            <i className="devicon-spring-original colored"></i>
          </div>

          <div className="skill-item">
            <i className="devicon-android-plain colored"></i>
          </div>

        </div>

      </section>
    </>

  );
};

export default SobreMi;