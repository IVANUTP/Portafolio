import React from "react";
import '../stylesheet/footer.css'
import icono from '../img/icono-blanco.png'

const Footer = () => {
    return (
        <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center">
            
            <img className="footer-logo" src={icono} alt="Logo del portafolio" />

            <p className="footer-texto text-center">
                Desarrollador web apasionado por crear soluciones modernas y eficientes.<br />
                Actualmente en busca de nuevas oportunidades. ¿Trabajamos juntos?
            </p>

            <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
                
                <a href="https://github.com/IVANUTP" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/angel-garc%C3%ADa-flores-4a08722b2/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                </a>
                
                <a href="mailto:TU_CORREO_AQUI@gmail.com">
                    <i className="bi bi-envelope"></i>
                </a>

            </div>

            <div className="derechos-de-autor">
                © 2026 Ángel Iván García Flores
            </div>

        </footer>
    )
}

export default Footer;