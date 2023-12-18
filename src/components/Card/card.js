import './card.css'
import InfoCard from '../InfoCard/infocard'
import { useState, Fragment } from 'react'

export default function Card({nombre, apellido, imagen, edad, apodo }) {
    const [show, setShow] = useState(false)


    return(
      <Fragment>
        <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-column justify-content-between align-items-center">
            <img src={imagen} alt="imagen-piloto"/>
            <h2 className="text-center">{nombre} {apellido}</h2>
              <button  onClick={()=> setShow(true)} className={show?"btn btn-active align-self-end more d-none":"btn btn-active align-self-end more d-block"}>+ INFO</button>
             <div className="edit-delete align-items-start d-none">  
               <i className="bi bi-trash3"></i>
               <i className="bi bi-pencil-square"></i>
             </div>
          </div>
          <div>        
           {show? <InfoCard nombre={nombre} apellido={apellido} imagen={imagen} edad={edad} apodo={apodo} setShow={setShow} /> : ''}
         </div>
      </div>
</Fragment>
    )
}