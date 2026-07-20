import React from "react";

class Systems extends React.Component {
  render() {
    const { img, titulo, descripcion, github, demo, estado } = this.props;

    return (
      <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">

        <div className="sys-card">

          <div className="sys-image-container">

            <img
              src={img}
              alt={titulo}
              className="sys-image"
            />

            {estado && (
              <span className="sys-status">
                {estado}
              </span>
            )}

          </div>

          <div className="sys-content">

            <h3 className="sys-title">{titulo}</h3>

            <p className="sys-description">{descripcion}</p>

            <div className="sys-buttons">

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sys-btn"
                >
                  <i className="bi bi-github"></i>
                </a>
              )}

              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sys-btn"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              )}

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Systems;