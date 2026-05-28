  import React from "react";
  import "../stylesheet/presentation.css";
  import desarrollador from "../img/photo.jpg";

  const Presentation = () => {
    return (
      <section className="hero">

        <div className="hero-content">

          <img
            className="hero-image"
            src={desarrollador}
            alt="Ángel Iván García"
          />

          <span className="hero-tag">
            Laravel · React · APIs REST
          </span>

          <h1>
            Hola, soy
            <span> Ángel Iván García</span>
          </h1>

          <p className="hero-description">
            Desarrollador web enfocado en Laravel y React.
            Me gusta crear aplicaciones modernas,
            funcionales y con diseños limpios.
          </p>

          <div className="hero-buttons">

            <a href="#proyectos" className="btn-primary-custom">
              Ver proyectos
            </a>

            <a href="#sobre-mi" className="btn-secondary-custom">
              Sobre mí
            </a>

          </div>

        </div>

      </section>
    );
  };

  export default Presentation;