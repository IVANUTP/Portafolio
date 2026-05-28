import React from "react";
import icono from "../img/icono.png";
import "../stylesheet/navbar.css";

const Navbar = () => {
  return (
    <nav className="custom-navbar navbar navbar-expand-lg fixed-top">

      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand" href="/">
          <img
            src={icono}
            alt="Logo"
            className="navbar-logo"
          />
        </a>

        {/* BUTTON MOBILE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* LINKS */}
        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#sobre-mi">
                Sobre mí
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#proyectos">
                Proyectos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;