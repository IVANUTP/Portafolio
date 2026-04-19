import React from "react";
import '../stylesheet/sobremi.css'


const SobreMi = () => {
  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="contenedor">

        <h2 className="seccion-titulo">Sobre mí</h2>

        <p className="seccion-texto">
          Soy desarrollador web con enfoque en backend, especializado en Laravel y PHP.
          He desarrollado sistemas como gestión de citas para barbería e inventarios,
          integrando APIs REST y bases de datos MySQL.
        </p>

        <p className="seccion-texto">
          Me enfoco en crear aplicaciones prácticas, funcionales y orientadas a resolver
          problemas reales de negocio, mientras continúo aprendiendo nuevas tecnologías
          para mejorar mis soluciones.
        </p>

        {/* 🔥 Skills */}
        <div className="skills">
          <span>Laravel</span>
          <span>PHP</span>
          <span>React</span>
          <span>MySQL</span>
          <span>APIs REST</span>
        </div>

      </div>
    </section>
  )
}
export default SobreMi;