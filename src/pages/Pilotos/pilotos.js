import React, { useState, useEffect, Fragment } from 'react';
import './pilotos.css';
import Nav from '../../components/Nav/nav.js';
import Card from '../../components/Card/card.js';
import FormPilotos from "../../components/Form/formPilotos.js"

export default function Pilotos({admin, setAdmin}) {
  const [pilotos, setPilotos] = useState([]);
  const [show, setShow] = useState(false);
  const [exito, setExito] = useState(false);
  const [showForm, setShowForm]=useState(false)

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
      if (!exito) {
        const resultado = await fetchPilotos();
        console.log(resultado)
        setPilotos(resultado);
      }
    };
  
    fetchData();
  }, [exito]);
 


  return (
    <Fragment>
      <Nav itemMenu={"Pilotos"} admin={admin} setAdmin={setAdmin} />
      { exito === false? (
      <main className='container-fluid pilotos-div justify-content-center align-items-center'>
        <h2 className="titulo row suyai-text justify-content-center align-items-center py-5 ">Pilotos</h2>
        <div className="formulario d-flex flex-column w-100 justify-content-center align-items-center">
           <button onClick={()=>{setShow(true); localStorage.removeItem("infoPiloto");}} className={ admin? "agregar btn-del p-2 d-block": "agregar btn-del p-2 d-none"}>Agregar Piloto</button>
           {show? <FormPilotos setExito={setExito} setShowForm={setShowForm} setShow={setShow}/> : ''}
        </div>
        <section className="row section-cards">
          {pilotos.map((piloto) => (
            <Card
              key={piloto.id_piloto}
              id_piloto={piloto.id_piloto}
              img={piloto.img}
              nombre={piloto.nombre}
              apellido={piloto.apellido}
              edad={piloto.edad}
              apodo={piloto.apodo}
              setExito={setExito}
              showForm={showForm}
              setShowForm={setShowForm}
              setShow={setShow}
              admin={admin}
              setAdmin={setAdmin}

            />
          ))}
        </section>
      
      </main> 
       ): ( <h2 className='cartel alert-success suyai-text text-center'>Acción realizada con éxito!</h2> 
      )}
    </Fragment>
  );
}
