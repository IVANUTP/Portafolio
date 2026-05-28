import React from "react";
import { BriefcaseFill } from "react-bootstrap-icons";

class Proyect extends React.Component {
  render() {
    return (
      <div className="col-12 col-lg-4 d-flex justify-content-center">
        <div className="project-card">

          <div className="project-top">
            <div className="icon-box">
              <BriefcaseFill />
            </div>

            <span className="project-date">
              {this.props.fecha}
            </span>
          </div>

          <h3 className="project-title">
            {this.props.titulo}
          </h3>

          <p className="project-text">
            {this.props.texto}
          </p>

          <div className="tech-container">
            <span>{this.props.sec1}</span>
            <span>{this.props.sec2}</span>
            <span>{this.props.sec3}</span>
          </div>

        </div>
      </div>
    );
  }
}

export default Proyect;