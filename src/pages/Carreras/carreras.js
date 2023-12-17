import Nav from '../../components/Nav/nav.js'
import './carreras.css'
import React, { useState, useEffect, Fragment } from 'react';
import '../Pilotos/pilotos.css';
import CarreraCard from '../../components/Card/carreraCard.js';

export default function Carreras() {

    const [carreras, setCarreras] = useState([]);

    useEffect(() => {
        const fetchCarreras = async () => {
          try {
            const response = await fetch("http://localhost:4000/carreras");
            const data = await response.json();
            console.log("Received data", data);
            setCarreras(data);
          } catch (err) {
            console.log("Hubo un error:", err);
          }
        };
    
        fetchCarreras();  
      }, []);

      useEffect(() => {
        console.log("Updated carreras:", carreras);
      }, [carreras]);

  
    return(
        <Fragment>
            <Nav itemMenu={"Carreras"}/>
            <main className='container-fluid'>
                <h2 className="row suyai-text justify-content-center align-items-center py-5">Carreras</h2>
                <section className="row section-cards">
                    {carreras.map((carrera) => (
                        <CarreraCard
                        key={carrera.id_carrera}
                        nombre_carrera={carrera.nombre_carrera}
                        fecha={carrera.fecha}
                        corredores={carrera.corredores}
                        />
                    ))}
                </section>
                
            </main>

        </Fragment>
    )
}