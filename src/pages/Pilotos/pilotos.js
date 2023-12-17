import React, { useState, useEffect, Fragment } from 'react';
import './pilotos.css';
import Nav from '../../components/Nav/nav.js';
import Card from '../../components/Card/card.js';

export default function Pilotos() {
  const [pilotos, setPilotos] = useState([]);

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
      <main className='container-fluid'>
        <h2 className="row suyai-text justify-content-center align-items-center py-5 ">Pilotos</h2>
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
