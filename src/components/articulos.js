import React from "react";
import '../stylesheet/articulos.css'

const aprendizajes = [
  {
    titulo: "API REST con Laravel",
    descripcion: "Creación de endpoints, rutas y controladores para manejo de datos.",
  },
  {
    titulo: "Estados en React",
    descripcion: "Uso de useState y useEffect para manejo dinámico de datos.",
  },
  {
    titulo: "Base de datos con MySQL",
    descripcion: "Diseño y conexión de base de datos con Laravel.",
  },
  {
    titulo: "CRUD completo",
    descripcion: "Operaciones completas de creación, lectura, actualización y eliminación.",
  },
  {
    titulo: "Consumo de APIs",
    descripcion: "Integración de servicios externos usando Axios en React.",
  }
];

const Articulos = () => {
  return (
    <section className="articulos d-flex flex-column align-items-center">
      <h2 className="seccion-titulo texto-negro">Aprendizajes</h2>
      <p className="seccion-descripcion">
        Tecnologías y prácticas que he aplicado en mis proyectos
      </p>

      <div className="card shadow-sm">
        <div className="card-header text-center">
          Conocimientos recientes
        </div>

        <ul className="list-group list-group-flush">
          {aprendizajes.map((item, index) => (
            <li key={index} className="list-group-item aprendizaje-item">
              <strong>{item.titulo}</strong>
              <span>{item.descripcion}</span>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>

  );
};

export default Articulos;