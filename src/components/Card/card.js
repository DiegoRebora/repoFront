import './card.css'
import InfoCard from '../InfoCard/infocard'
import { useState, Fragment } from 'react'
import FormPilotos from "../Form/formPilotos"

export default function Card({ id_piloto, nombre, apellido, edad, apodo, img, setPilotoEliminado}) {
    const [show, setShow] = useState(false)
    const [showForm, setShowForm] = useState(false)
  
  //const[nopiloto, setNopiloto] = useState(false)
    
    const eliminarPiloto= async()=>{
    const id=id_piloto;
    console.log(id)
    let respuesta= await fetch("http://localhost:4000/borrarPiloto",{
          method:'delete',
          headers:{
              'Content-Type':"application/json"
          },
          body: JSON.stringify({ id_piloto: id })
      })
      .then((data)=>{return data.json()})
      .then(()=> setPilotoEliminado(true))
      .then(()=>setTimeout(() => {
        setPilotoEliminado(false);
      }, 3000))
      .catch((err)=>console.log(err));
      console.log(respuesta);
     return respuesta
  }


    return(
      <Fragment>                        
        {showForm ? 
        (<FormPilotos/>)
     : (
        <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-column justify-content-between align-items-center">
            <img src={img}  className="img-fluid img-card" alt="imagen-piloto"/>
            <h2 className="text-center text-card">{nombre} {apellido}</h2>
            <div className="edit-delete-info">
                        <button onClick={() => setShow(true)} className={show ? "btn-info align-self-end d-none" : "btn-info align-self-end more d-block"}>+ INFO</button>
                        <button onClick={() => {eliminarPiloto(); setPilotoEliminado(true);}}className="btn-del align-self-end">
                            <i className="bi bi-trash3"></i>
                        </button>
                        <button onClick={() => { setShowForm(true)}} className="btn-del align-self-end">
                            <i className="bi bi-pencil-square"></i>
                        </button>
                        {showForm ? 
                            (<FormPilotos/>

                            )
                         : ""

                        }
                    </div>
                </div>
                <div>
                    {show ? <InfoCard nombre={nombre} apellido={apellido} img={img} edad={edad} apodo={apodo} setShow={setShow} /> : ''}
                </div>
            </div>)}
        </Fragment>
    )
}