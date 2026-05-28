import React from "react";
import Systems from "./systems";
import "../stylesheet/system.css";

import imgInventario from "../img/gestionInventario.png";
import bbrbar from "../img/brber.png";
import weatherapp from "../img/weatherapp.png";

const MainSystem = () => {
  return (
    <section id="proyectos" className="projects-section">

      <div className="projects-header">

        <span className="projects-subtitle">
          PORTAFOLIO
        </span>

        <h2>
          Mis proyectos
        </h2>

        <p>
          Algunos proyectos desarrollados utilizando
          Laravel, React y APIs REST.
        </p>

      </div>

      <div className="container">

        <div className="row g-4 justify-content-center">

          <Systems
            img={imgInventario}
            titulo="StockManager"
            descripcion="Sistema web de inventario desarrollado con Laravel y React para administración de productos y categorías."
          />

          <Systems
            img={bbrbar}
            titulo="BRBER"
            descripcion="Sistema de gestión para barbería con citas, administración de clientes y control de horarios."
          />

          <Systems
            img={weatherapp}
            titulo="WeatherApp"
            descripcion="Aplicación web del clima en tiempo real utilizando APIs meteorológicas y React."
          />

        </div>

      </div>

    </section>
  );
};

export default MainSystem;