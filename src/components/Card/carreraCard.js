import './card.css'
import FormCarreras from '../Form/formCarreras'
import { useState } from 'react';

export default function CarreraCard({nombre_carrera, fecha, corredores }) {
    console.log("CarreraCard props:", { nombre_carrera, fecha, corredores });
    const [showEdit, setShowEdit] = useState(false);

    return (
        showEdit ? (
            <FormCarreras />
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
                        <button  onClick={() => { setShowEdit(true)}} className="btn-del align-self-end">
                            <i className="bi bi-pencil-square"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}