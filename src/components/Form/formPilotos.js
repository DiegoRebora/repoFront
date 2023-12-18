import "./formPilotos.css"
import {Fragment, useState} from "react";

export default  function FormPilotos () {
    const [show, setShow] = useState(true)
    const cargarPiloto=async(event)=>{
        event.preventDefault();
        console.log("información enviada");
        const form=JSON.stringify({
            nombre: event.target[0].value,
            apellido: event.target[1].value,
            edad: event.target[2].value,
            apodo: event.target[3].value
        })
        await fetch("http://localhost:4000/cargarPiloto", {
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
            <form className="formpilotos d-flex flex-column w-25 gap-2" onSubmit={(event)=>cargarPiloto(event)}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre"/>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido"/>
            <label htmlFor="edad">Edad</label>
            <input type="number" id="edad" name="edad"/>
            <label htmlFor="apodo">Apodo</label>
            <input type="text" id="apodo" name="apodo"/>
            <input type="submit" value="Enviar" className="nav-link botonav form p-2"/>
        </form>: <button className="nav-link botonav form p-2"> Piloto cargado correctamente</button>}
    </Fragment>)
}