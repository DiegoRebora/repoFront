import "../Card/card.css"
import "./formPilotos.css"
import {Fragment, useState, useEffect} from "react";

export default  function FormPilotos ({setExito, setShowForm, setShow}) {
    
    const[metodo, setMetodo] = useState(" ") 
    const [formData, setFormData] = useState({})// eslint-disable-next-line
    const [showForm, setShowFormLocal] = useState(true);
const cargarPiloto=async(e)=>{
    e.preventDefault();
    let id_piloto= "";
    let formInfo= "";
    let fetchConfig = {};

    if (metodo === "post"){
        formInfo= new FormData(e.target)
        
        const img=e.target[5].value
        formInfo.append("imagen",img)
 

        fetchConfig={
            method:metodo,
            body:formInfo,
        }

    }
    if (metodo === "put"){
        formInfo=JSON.stringify(formData)
        id_piloto = formData.id_piloto

        fetchConfig={
            method:metodo,
            headers:{"Content-type": "application/json"},
            body:formInfo,
        }

    } // eslint-disable-next-line
    let respuesta=await fetch(`https://suyairacing.onrender.com/cargarPiloto/${id_piloto}`, fetchConfig)
    
    .then((resp)=>{resp.json()})
    .then((data)=>{console.log(data);
        if (metodo === "put"){localStorage.removeItem("infoPiloto")};
    })
    .then(()=> {setShow(false)})
    .then(()=> {setShowForm(false)})
    .then(()=> {setExito(true);
     setTimeout(() => {
        setExito(false);
      }, 2000)})
    .catch((err)=>console.log(err))
}

    
    const cambioValor=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    useEffect (()=>{
        let pilotoData=localStorage.getItem("infoPiloto")
        if (pilotoData === null) {
            setMetodo("post")
        }else{
            setMetodo("put")
            pilotoData=JSON.parse(pilotoData)
            setFormData(pilotoData)
        }},[])



    return (
        <Fragment>
        {showForm? 
            
          
            <form className="formpilotos d-flex flex-column w-25 gap-2"  onSubmit={(event)=>cargarPiloto(event)}>
            <button className= "btn btn-active d-flex align-self-end m-2 btn-x-sm" onClick={()=>{ localStorage.removeItem("infoPiloto"); setShowForm(false); setShow(false)}}>X</button>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={(event)=>cambioValor(event)}/>
            
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={(event)=>cambioValor(event)}/>
            
            <label htmlFor="edad">Edad</label>
            <input type="number" id="edad" name="edad" value={formData.edad} onChange={(event)=>cambioValor(event)}/>
            
            <label htmlFor="apodo">Apodo</label>
            <input type="text" id="apodo" name="apodo" value={formData.apodo} onChange={(event)=>cambioValor(event)}/>

         <label  htmlFor="imagen-piloto">Cargar imagen</label>
        <input className="ms-2" type="file" id="img" name="img"/>

            <input type="submit" value={"Enviar"} className="nav-link botonav form p-2"/>
        </form>: ""}
    </Fragment>)} 