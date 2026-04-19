import React from "react";
import Proyect from "./proyects";
import '../stylesheet/proyects.css'

const MainProyect = () => {
    return (
        <section className="experiencia-profesional">


            {/* EXPERIENCIA */}
            <h2 className="seccion-titulo">Experiencia</h2>

            <div className="container">
                <div className="row justify-content-center">

                    <Proyect
                        titulo="Practicante de Desarrollo Web – Agua Inmaculada"
                        fecha="Mayo 2023 – Agosto 2023"
                        texto="Desarrollo de sistema web para gestión de datos de
                                laboratorio
                                Creación de módulos para análisis de agua y generación de
                                reportes
                                Implementación de APIs REST para intercambio de
                                información en formato JSON
                                Uso de PHP, MySQL y consumo de servicios web"
                        sec1="PHP"
                        sec2="MySQL"
                        sec3="API REST"
                    />

                    <Proyect
                        titulo="Sistema de Programación de Cirugías – Christus Muguerza"
                        fecha="Enero 2025 – Abril 2025"
                        texto="Desarrollo de un sistema web para la programación de
                                cirugías en quirófano, utilizado para organizar fechas,
                                horarios y recursos.
                                Implementación del sistema con Laravel bajo el patrón MVC.
                                Conexión directa a MySQL para el manejo de información
                                crítica.
                                Desarrollo de módulos CRUD para:
                                Programación de cirugías
                                Gestión de usuarios
                                Control de horarios"
                        sec1="Laravel"
                        sec2="MVC"
                        sec3="MySQL"
                    />
                  
                    <Proyect
                        titulo="Ingeniería en Desarrollo y Gestión de Software"
                        fecha="2023 - 2025"
                        texto="Especialización en desarrollo de software, arquitectura de sistemas y tecnologías web modernas."
                        sec1="Arquitectura"
                        sec2="Backend"
                        sec3="Software"
                    />

                </div>
            </div>

         

        </section>
    );
};
export default MainProyect