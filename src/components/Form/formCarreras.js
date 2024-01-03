import "./formPilotos.css"
import {Fragment, useEffect, useState} from "react";
export default function FormCarreras ({setExitoCarr}) {
    const [showForm, setShowForm] = useState(true)
    const[metodo, setMetodo] = useState(" ") 
    const [formData, setFormData] = useState({})

const cargarCarrera=async(e)=>{
    e.preventDefault();
    let id_carrera= "";
    let formInfo= "";
    let fetchConfig = {};

    if (metodo === "post"){
        formInfo=JSON.stringify(formData)


        fetchConfig={
            method:metodo,
            headers:{"Content-type": "application/json"},
            body:formInfo,
        }

    }
    if (metodo === "put"){
        formInfo=JSON.stringify(formData)
        id_carrera = formData.id_carrera

        fetchConfig={
            method:metodo,
            headers:{"Content-type": "application/json"},
            body:formInfo,
        }

    } 
    let respuesta=await fetch(`http://localhost:4000/cargarCarrera/${id_carrera}`, fetchConfig)
    
    .then((resp)=>{resp.json()})
    .then((data)=>{console.log(data);
        if (metodo === "put"){localStorage.removeItem("infoCarrera")};
    })
    .then(()=> setExitoCarr(true))
    .then(()=>setTimeout(() => {
        setExitoCarr(false);
      }, 2000))
    

    .catch((err)=>console.log(err))
}
    
    const cambioValor=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    useEffect (()=>{
        let carreraData=localStorage.getItem("infoCarrera")
        if (carreraData === null) {
            setMetodo("post")
        }else{
            setMetodo("put")
            carreraData=JSON.parse(carreraData)
            setFormData(carreraData)
        }},[])

    return (
    <Fragment>
        {showForm?
        <form className="formpilotos d-flex flex-column w-25 gap-2" onSubmit={(event)=>cargarCarrera(event)} >
            <button className= "btn btn-active d-flex align-self-end m-2 btn-x-sm" onClick={()=>{setShowForm(false); localStorage.removeItem("infoCarrera");}} >X</button>
            <label htmlFor="nombre_carrera">Nombre</label>
            <input type="text" id="nombre_carrera" name="nombre_carrera" value={formData.nombre_carrera} onChange={(event)=>cambioValor(event)}/>
            <label htmlFor="fecha">Fecha</label>
            <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={(event)=>cambioValor(event)}/>
            <label htmlFor="corredores">Corredores</label>
            <input type="number" id="corredores" name="corredores" value={formData.corredores} onChange={(event)=>cambioValor(event)}/>

            <input type="submit" value={"Enviar"} className="nav-link botonav form p-2"/>
        </form>: "" }

    </Fragment>  )
}