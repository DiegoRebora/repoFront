import './card.css'
import FormCarreras from '../Form/formCarreras'
import { useState } from 'react';

export default function CarreraCard({nombre_carrera, fecha, corredores, id_carrera, setExitoCarr, admin}) {
    const [showEdit, setShowEdit] = useState(false);
    const carreraInfo={
      id_carrera,
      nombre_carrera,
      fecha,
      corredores,
    }

    const eliminarCarrera= async()=>{
      const id=id_carrera;
 

      let respuesta= await fetch("https://suyairacing.onrender.com/borrarCarrera",{
            method:'delete',
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify({ id_carrera: id })
            
        })
        .then((data)=>{return data.json()})
        .then(()=> setExitoCarr(true))
        .then(()=>setTimeout(() => {
          setExitoCarr(false);
        }, 2000))
        .catch((err)=>console.log(err));
       return respuesta
    }

    const editarCarrera =()=>{
        localStorage.setItem("infoCarrera", JSON.stringify(carreraInfo))
    }

    return (
        showEdit ? (
            <FormCarreras setExitoCarr={setExitoCarr} editarCarrera={editarCarrera} />
        ) : (
            <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-column justify-content-between align-items-center">
                    <h2 className="size-name text-center">{nombre_carrera}</h2>
                    <ul className="list-group">
                        <li className="list-group-item p-3 d-flex flex-column">
                            <h4>Nombre:</h4>
                            <span className="fw-bold">{nombre_carrera}</span>
                        </li>
                        <li className="list-group-item p-3 d-flex flex-column">
                            <h4>Fecha:</h4>
                            <span className="fw-bold">{fecha}</span>
                        </li>
                        <li className="list-group-item p-3 d-flex flex-column">
                            <h4>Corredores:</h4>
                            <span className="fw-bold">{corredores}</span>
                        </li>
                    </ul>

                    <div className="edit-delete-info">
                    <button onClick={() => { setShowEdit(true); editarCarrera()}} className={admin ? "btn-del align-self-end d-block" : "btn-del align-self-end d-none"}>
                            <i className="bi bi-pencil-square"></i>
                    </button>
                    <button onClick={() => {eliminarCarrera();}} className={admin ? "btn-del align-self-end d-block" : "btn-del align-self-end d-none"}>
                            <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                </div>
            </div>
        )
    );
}