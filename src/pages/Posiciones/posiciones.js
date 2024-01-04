import Nav from '../../components/Nav/nav.js'
import React, { useState, useEffect, Fragment } from 'react';
import '../Pilotos/pilotos.css';
import './posiciones.css'
import PosicionesCard from '../../components/Card/posicionesCard.js';

export default function Posiciones() {

    const [posiciones, setPosiciones] = useState([]);

    useEffect(() => {
        const fetchPosiciones = async () => {
          try {
            const response = await fetch("https://suyairacing.onrender.com/tablaGeneral");
            const data = await response.json();
            console.log("Received data", data);
            setPosiciones(data);
          } catch (err) {
            console.log("Hubo un error:", err);
          }
        };
    
        fetchPosiciones();  
        console.log(posiciones)// eslint-disable-next-line
      }, []);

      useEffect(() => {
        console.log("Updated posiciones:", posiciones);
      }, [posiciones]);

  
    return(
        <Fragment>
            <Nav itemMenu={"Posiciones"}/>
            <main className='container-fluid posiciones justify-content-center align-items-center'> 
                <h2 className="row suyai-text justify-content-center align-items-center py-5">Posiciones</h2>
                  <section className="table-container">
                    <div className="d-flex flex-column justify-content-between align-items-center">
                        <table className="table table-dark table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Puntaje</th>
                                </tr>
                            </thead>
                            <tbody>

                                {posiciones.map((posicion) => (
                                    <PosicionesCard
                                    key={posicion.id_piloto}
                                    id_piloto={posicion.id_piloto}
                                    nombre_piloto={posicion.nombre_piloto}
                                    puntaje_total={posicion.puntaje_total}
                                />
                               ))}
                            </tbody>
                        </table> 
                    </div>
                </section>
            
            </main>

        </Fragment>
    );
}