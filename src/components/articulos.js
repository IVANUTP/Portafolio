import React from "react";
import "../stylesheet/articulos.css";

const aprendizajes = [
  {
    titulo: "API REST con Laravel",
    descripcion:
      "Creación de endpoints, rutas y controladores para manejo de datos.",
  },
  {
    titulo: "Estados en React",
    descripcion:
      "Uso de useState y useEffect para manejo dinámico de datos.",
  },
  {
    titulo: "CRUD completo",
    descripcion:
      "Operaciones de creación, lectura, actualización y eliminación.",
  },
  {
    titulo: "Consumo de APIs",
    descripcion:
      "Integración de servicios externos usando Axios en React.",
  },
  {
    titulo: "Diseño responsive",
    descripcion:
      "Interfaces modernas adaptadas a dispositivos móviles.",
  },
];

const Articulos = () => {
  return (
    <section className="learning-section">

      <div className="learning-header">

        <span className="learning-subtitle">
          APRENDIZAJES
        </span>

        <h2>
          Tecnologías y prácticas
        </h2>

        <p>
          Herramientas y conocimientos que he aplicado
          en diferentes proyectos web.
        </p>

      </div>

      <div className="learning-grid">

        {aprendizajes.map((item, index) => (

          <div className="learning-card" key={index}>

            <div className="learning-number">
              0{index + 1}
            </div>

            <h3>
              {item.titulo}
            </h3>

            <p>
              {item.descripcion}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Articulos;