import './card.css'
import InfoCard from '../InfoCard/infocard'
import { useState, Fragment } from 'react'
import FormPilotos from "../Form/formPilotos"

export default function Card({ id_piloto, nombre, apellido, edad, apodo, img, setExito, setShowForm, setShow, admin}) {
    const [showInfo, setShowInfo] = useState(false)
    const [showFormCard, setShowFormCard] = useState(false)
    const pilotoInfo= {
      id_piloto,
      nombre,
      apellido,
      edad,
      apodo
    }
    const eliminarPiloto= async()=>{
    const id=id_piloto;
    let respuesta= await fetch("https://suyairacing.onrender.com/borrarPiloto",{
          method:'delete',
          headers:{
              'Content-Type':"application/json"
          },
          body: JSON.stringify({ id_piloto: id })
      })
      .then((data)=>{return data.json()})
      .then(()=> setExito(true))
      .then(()=>setTimeout(() => {
        setExito(false);
      }, 2000))
      .catch((err)=>console.log(err));
     return respuesta
  }
  const editarPiloto =()=>{
    localStorage.setItem("infoPiloto", JSON.stringify(pilotoInfo));
    setShowForm(true);
    setShowFormCard(true)
}


    return(
      <Fragment>                        
       {showFormCard && (
        <FormPilotos setExito={setExito} setShowForm={setShowForm} setShowFormCard={setShowFormCard} setShow={setShow}/>
      )}
      {!showFormCard && (

        <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-column justify-content-between align-items-center">
            <img src={img}  className="img-fluid img-card" alt="imagen-piloto"/>
            <h2 className="text-center text-card">{nombre} {apellido}</h2>
            <div className="edit-delete-info">
                        <button onClick={() => setShowInfo(true)} className={showInfo ? "btn-info align-self-end d-none" : "btn-info align-self-end more d-block"}>+ INFO</button>
                        <button onClick={() => {eliminarPiloto(); setTimeout(()=>{setExito(true);},0);}}className={admin ? "btn-del align-self-end d-block": "btn-del align-self-end d-none"}>
                            <i className="bi bi-trash3"></i>
                        </button>
                        <button onClick={() => { setShowForm(true); editarPiloto();}} className={admin ? "btn-del align-self-end d-block": "btn-del align-self-end d-none"}>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                    </div>
                </div>
                <div>
                    {showInfo ? <InfoCard nombre={nombre} apellido={apellido} img={img} edad={edad} apodo={apodo} setShowInfo={setShowInfo} /> : ''}
                </div>
            </div>)}
        </Fragment>
    )
}