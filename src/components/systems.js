import React from "react";


class Systems extends React.Component {
    render() {
        return (
            <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                    <img src={this.props.img} alt="proyecto" />
                    <div className="overlay">
                        <p>{this.props.titulo}</p>
                        <span>{this.props.descripcion}</span>
                        <div className="iconos-contenedor">
                            <a href="https://github.com/IVANUTP" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://weather-app-psi-one-99.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-laptop"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Systems