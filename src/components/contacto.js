import React, { useState } from "react";
import "../stylesheet/contacto.css";

const Contacto = () => {

  const [showcv, setshowcv] = useState(false);

  return (
    <>

      <section id="contacto" className="contact-section">

        <div className="contact-card">

          <span className="contact-subtitle">
            CONTACTO
          </span>

          <h2>
            ¿Trabajamos juntos?
          </h2>

          <p>
            Puedes contactarme para proyectos web,
            colaboración o cualquier consulta relacionada
            con desarrollo frontend o backend.
          </p>

          <div className="contact-buttons">

            <button
              className="primary-btn"
              onClick={() => setshowcv(true)}
            >
              Ver CV
              <i className="bi bi-file-earmark-pdf-fill"></i>
            </button>

            <a
              href="mailto:tuemail@gmail.com"
              className="secondary-btn"
            >
              Contactar
            </a>

          </div>

        </div>

      </section>

      {/* MODAL */}

      {
        showcv && (

          <div className="modal-cv">

            <div className="modal-content-custom">

              <button
                className="close-btn"
                onClick={() => setshowcv(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>

              <iframe
                src={process.env.PUBLIC_URL + "/cvAngel.pdf"}
                width="100%"
                height="600px"
                title="CV"
              />

            </div>

          </div>

        )
      }

    </>
  );
};

export default Contacto;