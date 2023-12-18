import "./formPilotos.css"
import {Fragment, useState} from "react";
export default function FormCarreras () {
    const [show, setShow] = useState(true)
    const cargarCarrera=async(event)=>{
        event.preventDefault();
        console.log("información enviada");
        const form=JSON.stringify({
            nombre_carrera: event.target[0].value,
            fecha: event.target[1].value,
            corredores: event.target[2].value
        })
       
        await fetch("http://localhost:4000/cargarCarrera", {
            method:"post",
            body: form,
            headers: {
                "Content-type" : "application/json"
            }
        })
        .then((res)=> console.log(res))
        .then(()=>setShow(false))
        .catch((err)=>console.log(err))
        
    }
    return (
    <Fragment>
        {show?
        <form className="formpilotos d-flex flex-column w-25 gap-2" onSubmit={(event)=>cargarCarrera(event)} >
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre_carrera" name="nombre_carrera"/>
            <label htmlFor="apellido">Fecha</label>
            <input type="date" id="fecha" name="fecha"/>
            <label htmlFor="edad">Corredores</label>
            <input type="number" id="corredores" name="corredores"/>

            <input type="submit" value="Enviar" className="nav-link botonav form p-2"/>
        </form>: <button className="nav-link botonav form p-2"> Carrera cargada correctamente</button>  }
    </Fragment>  )
}