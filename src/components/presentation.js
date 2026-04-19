import React from "react";
import '../stylesheet/presentation.css';
import hero from '../img/hero-inferior.png';
import desarrollador from '../img/photo.jpg';

const Presentation = () => {
    return (
    <section className="hero">

  <div className="hero-principal">

    <img 
      className="hero-imagen-desarrollador rounded-circle shadow-sm" 
      src={desarrollador} 
      alt="Foto de Ángel Iván García" 
    />

    <h1 className="fw-bold">Hola, soy Ángel Iván García</h1>

    <h2 className="hero-subtitle">
      Desarrollador Web Jr | Laravel, React y APIs REST
    </h2>

    <p className="hero-text">
      Construyo aplicaciones web modernas enfocadas en rendimiento,
      escalabilidad y experiencia de usuario.
    </p>



  </div>

  <img 
    className="hero-inferior-imagen img-fluid" 
    src={hero} 
    alt="Ilustración desarrollo web" 
  />

</section>
    );
};

export default Presentation;