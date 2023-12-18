import React, { useState, useEffect, Fragment } from 'react';
import './pilotos.css';
import Nav from '../../components/Nav/nav.js';
import Card from '../../components/Card/card.js';
import FormPilotos from "../../components/Form/formPilotos.js"

export default function Pilotos() {
  const [pilotos, setPilotos] = useState([]);
  const [show, setShow] = useState(false)


  const fetchPilotos = async () => {
    try {
      const response = await fetch("http://localhost:4000/");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log("Hubo un error:", err);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await fetchPilotos();
      setPilotos(resultado);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <Nav itemMenu={"Pilotos"} />
      <main className='container-fluid pilotos-div justify-content-center align-items-center'>
        <h2 className="titulo row suyai-text justify-content-center align-items-center py-5 ">Pilotos</h2>
        <div className="formulario d-flex flex-column w-100 justify-content-center align-items-center">
           <button onClick={()=> setShow(!show)} className="agregar nav-link botonav p-2 d-none">+ Piloto</button>
           {show? <FormPilotos/> : ''}
        </div>
        <section className="row section-cards">
          {pilotos.map((piloto) => (
            <Card
              key={piloto.id_piloto}
              nombre={piloto.nombre}
              apellido={piloto.apellido}
              imagen={piloto.img}
              edad={piloto.edad}
              apodo={piloto.apodo}
            />
          ))}
        </section>
      </main>
    </Fragment>
  );
}
