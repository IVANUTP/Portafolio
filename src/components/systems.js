  import React from "react";

  class Systems extends React.Component {
    render() {
      return (
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">

          <div className="project-card">

            <div className="project-image-container">
              <img
                src={this.props.img}
                alt={this.props.titulo}
                className="project-image"
              />
            </div>

            <div className="project-content">

              <h3>{this.props.titulo}</h3>

              <p>
                {this.props.descripcion}
              </p>

              <div className="project-buttons">

                <a
                  href="https://github.com/IVANUTP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://weather-app-psi-one-99.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>

              </div>

            </div>

          </div>

        </div>
      );
    }
  }

  export default Systems;