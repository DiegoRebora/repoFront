import Nav from '../../components/Nav/nav.js'
import React, { useState, useEffect, Fragment } from 'react';
import '../Pilotos/pilotos.css';
import "./carreras.css"
import CarreraCard from '../../components/Card/carreraCard.js';
import FormCarreras from '../../components/Form/formCarreras.js';

export default function Carreras() {

    const [carreras, setCarreras] = useState([]);
    const [show, setShow] = useState(false);

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
            <main className='container-fluid carreras-div'>
                <h2 className="titulo row suyai-text justify-content-center align-items-center py-5">Carreras</h2>
                <section className="row section-cards">
                <div className="formulario d-flex flex-column w-100 justify-content-center align-items-center">
                <button onClick={()=> setShow(!show)} className="agregar nav-link botonav p-2 d-none">+ Carreras</button>
                  {show? <FormCarreras/> : ''}
               </div>
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