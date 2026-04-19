import React, { useState } from "react";
import '../stylesheet/contacto.css'

const Contacto = () => {
    const [showcv, setshowcv] = useState(false)

    return (
        <>
            <section id="contacto" className="contacto seccion-oscura">
                <div className="container">
                    <div className="container text-center rectangulo d-flex justify-content-evenly">
                        <div className="row">
                            <div className="col-12 col-md-4 seccion-titulo">
                                ¡Hablemos!
                            </div>
                            <div className="col-12 col-md-4 descripcion">
                                Contáctame para iniciar tu proyecto de desarrollo web o para cualquier consulta relacionada con mis servicios.
                            </div>
                            <div className="col-12 col-md-4">
                                <button type="button" onClick={() => setshowcv(true)}>
                                    Ver CV
                                    <i className="bi bi-file-earmark-pdf-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                showcv && (
                    <div className="modal-cv">
                        <div className="modal-content">
                            <button className="close-btn" onClick={() => setshowcv(false)}>X</button>

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


    )
}
export default Contacto;