import Nav from '../../components/Nav/nav.js'
import React, { useState, useEffect, Fragment } from 'react';
import '../Pilotos/pilotos.css';
import "./carreras.css"
import CarreraCard from '../../components/Card/carreraCard.js';
import FormCarreras from '../../components/Form/formCarreras.js';

export default function Carreras() {

    const [carreras, setCarreras] = useState([]);
    const [show, setShow] = useState(false);
    const [exitoCarr, setExitoCarr] =useState(false)

    useEffect(() => {
        const fetchCarreras = async () => {
          try {
            const response = await fetch("http://localhost:4000/carreras");
            const data = await response.json();
      
            setCarreras(data);
           
          } catch (err) {
            console.log("Hubo un error:", err);
          }
        };
        if (!exitoCarr) {
              fetchCarreras();
 
        }  
      }, [exitoCarr]);


  
    return(
        <Fragment>
         
        <Nav itemMenu={"Carreras"}/>
            { exitoCarr === false? (
            <main className='container-fluid carreras-div'>
                <h2 className="titulo row suyai-text justify-content-center align-items-center py-5">Carreras</h2>
                <section className="row section-cards">
                <div className="formulario d-flex flex-column w-100 justify-content-center align-items-center">
                <button onClick={()=> {setShow(!show); localStorage.removeItem("infoCarrera");}} className="agregar btn-del p-2 ">Agregar Carrera</button>
                  {show? <FormCarreras setExitoCarr={setExitoCarr}/> : ''}
               </div>
                    {carreras.map((carrera) => (
                        <CarreraCard
                        key={carrera.id_carrera}
                        id_carrera={carrera.id_carrera}
                        nombre_carrera={carrera.nombre_carrera}
                        fecha={carrera.fecha}
                        corredores={carrera.corredores}
                        setExitoCarr={setExitoCarr}
                        />
                    ))}
                </section>
                
            </main>
           ) :( <h2 className='cartel alert-success suyai-text text-center'>Acción realizada con éxito!</h2> )}

        </Fragment>
    )
}