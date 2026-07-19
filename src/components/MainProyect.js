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
          Desarrollo de aplicaciones web y móviles enfocadas en backend,
          APIs REST, arquitectura de software e interfaces modernas.
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
            texto="Desarrollo de un sistema con Laravel para la gestión de cirugías, médicos, pacientes y horarios bajo arquitectura MVC."
            sec1="Laravel"
            sec2="MVC"
            sec3="MySQL"
          />

          <Proyect
            titulo="Ingeniería en Desarrollo y Gestión de Software"
            fecha="2023 - 2025"
            texto="Especialización en desarrollo backend, bases de datos, arquitectura de software y tecnologías web modernas."
            sec1="Backend"
            sec2="Arquitectura"
            sec3="Software"
          />

          {/* NUEVO */}

          <Proyect
            titulo="Sistema Empresarial MexicanFy"
            fecha="Junio 2026 – Actualidad"
            texto="Desarrollo de funcionalidades para el módulo de clientes y proveedores, incluyendo validación documental, carga de archivos, envío automático de correos, implementación de APIs REST y desarrollo del módulo de Tracking."
            sec1="Spring Boot"
            sec2="React"
            sec3="REST API"
          />

          <Proyect
            titulo="GymRat App"
            fecha="Proyecto Personal"
            texto="Aplicación móvil desarrollada en Kotlin enfocada en la gamificación del entrenamiento, incorporando sistema de experiencia, niveles, rachas, historial de entrenamientos y una interfaz moderna con Material Design."
            sec1="Kotlin"
            sec2="Android"
            sec3="Material Design"
          />

        </div>
      </div>

    </section>
  );
};

export default MainProyect;