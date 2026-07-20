import React from "react";
import Systems from "./systems";
import "../stylesheet/system.css";

import imgInventario from "../img/gestionInventario.png";
import bbrbar from "../img/brber.png";
import weatherapp from "../img/weatherapp.png";
import gymrat from "../img/gymrat.png";
//import mexicanfy from "../img/mexicanfy.png";

const MainSystem = () => {
  return (
    <section id="proyectos" className="sys-section">

      <div className="sys-header">

        <span className="sys-subtitle">
          PORTAFOLIO
        </span>

        <h2>
          Mis proyectos
        </h2>

        <p>
          Algunos proyectos desarrollados utilizando
          Laravel, React, Android y APIs REST.
        </p>

      </div>

      <div className="container">

        <div className="row g-4 justify-content-center">

          <Systems
            img={gymrat}
            titulo="GymRat"
            descripcion="App Android de seguimiento de entrenamiento: perfil, progreso de peso con objetivos, e historial de rutinas con métricas de mejora."
            estado="En desarrollo · App móvil"
            github="https://github.com/IVANUTP/gymrat"
            demo={null}
          />

          <Systems
            img={gymrat}
            titulo="Mexicanfy"
            descripcion="Web internacional para conectar con la cultura y productos mexicanos. Actualmente en desarrollo su versión de aplicación móvil."
            estado="En desarrollo · App móvil"
            github="https://github.com/IVANUTP/mexicanfy"
            demo="#"
          />

          <Systems
            img={imgInventario}
            titulo="StockManager"
            descripcion="Sistema web de inventario desarrollado con Laravel y React para administración de productos y categorías."
            github="https://github.com/IVANUTP"
            demo="#"
          />

          <Systems
            img={bbrbar}
            titulo="BRBER"
            descripcion="Sistema de gestión para barbería con citas, administración de clientes y control de horarios."
            github="https://github.com/IVANUTP"
            demo="#"
          />

          <Systems
            img={weatherapp}
            titulo="WeatherApp"
            descripcion="Aplicación web del clima en tiempo real utilizando APIs meteorológicas y React."
            github="https://github.com/IVANUTP"
            demo="https://weather-app-psi-one-99.vercel.app/"
          />

        </div>

      </div>

    </section>
  );
};

export default MainSystem;