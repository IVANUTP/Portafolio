import React from "react";
import Systems from "./systems";
import '../stylesheet/system.css'
import imgInventario from '../img/gestionInventario.png';
import bbrbar from '../img/brber.png';
import weatherapp from '../img/weatherapp.png';

const MainSystem = () => {

    return (
        <>
            <section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
                <h2 className="seccion-titulo texto-negro">Mis proyectos recientes</h2>
                <h3 className="seccion-descripcion">Estos son algunos proyectos que he creado recientemente...</h3>
                <div className="container text-center proyectos-contenedor">
                    <div className="row">
                        <Systems
                           img={imgInventario}
                            titulo="StockManager"
                            descripcion="Sistema web de gestión de inventario desarrollado con Laravel y React, enfocado en la administración eficiente de productos, categorías y proveedores mediante operaciones CRUD."
                        />
                        <Systems
                            img={bbrbar}
                            titulo="BRBER"
                            descripcion="Sistema web de gestión para barbería que permite agendar citas, administrar clientes y organizar horarios de barberos, mejorando la eficiencia operativa del negocio."

                        />
                        <Systems
                            img={weatherapp}
                            titulo="WeatherApp"
                            descripcion="Aplicación web de pronóstico del tiempo que muestra condiciones climáticas en tiempo real para múltiples ubicaciones, utilizando una API de servicios meteorológicos."
                        />

                    </div>
                </div>

            </section>

        </>
    )

}
export default MainSystem