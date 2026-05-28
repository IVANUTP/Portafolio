import React from "react";
import Proyect from "./proyects";
import "../stylesheet/proyects.css";

const MainProyect = () => {
  return (
    <section className="projects-section">

      <div className="projects-header">
        <span className="subtitle">EXPERIENCIA PROFESIONAL</span>

        <h2>
          Proyectos & Experiencia
        </h2>

        <p>
          Desarrollo de sistemas web modernos enfocados en backend,
          APIs REST y arquitectura de software.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">

          <Proyect
            titulo="Practicante de Desarrollo Web – Agua Inmaculada"
            fecha="Mayo 2023 – Agosto 2023"
            texto="Desarrollo de módulos para análisis de agua, generación de reportes y APIs REST utilizando PHP y MySQL."
            sec1="PHP"
            sec2="MySQL"
            sec3="REST API"
          />

          <Proyect
            titulo="Sistema de Programación de Cirugías – Christus Muguerza"
            fecha="Enero 2025 – Abril 2025"
            texto="Sistema desarrollado con Laravel para gestionar cirugías, horarios y usuarios mediante arquitectura MVC."
            sec1="Laravel"
            sec2="MVC"
            sec3="MySQL"
          />

          <Proyect
            titulo="Ingeniería en Desarrollo y Gestión de Software"
            fecha="2023 - 2025"
            texto="Especialización en desarrollo backend, arquitectura de software y tecnologías web modernas."
            sec1="Backend"
            sec2="Arquitectura"
            sec3="Software"
          />

        </div>
      </div>

    </section>
  );
};

export default MainProyect;