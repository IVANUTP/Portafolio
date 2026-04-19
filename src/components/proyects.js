import React from "react";

class Proyect extends React.Component {
  render() {
    return (
      <div className="columna col-12 col-md-4 experiencia-card">
        <i className="bi bi-briefcase"></i>

        <p className="experiencia-titulo">{this.props.titulo}</p>
        <span className="experiencia-fecha">{this.props.fecha}</span>

        <p className="experiencia-texto">{this.props.texto}</p>

        <div className="badges-contenedor">
          <span className="badge text-bg-dark">{this.props.sec1}</span>
          <span className="badge text-bg-dark">{this.props.sec2}</span>
          <span className="badge text-bg-dark">{this.props.sec3}</span>
        </div>
      </div>
    );
  }
}

export default Proyect;


