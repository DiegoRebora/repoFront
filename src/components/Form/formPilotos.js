import "../Card/card.css"
import "./formPilotos.css"
import {Fragment, useState} from "react";

export default  function FormPilotos () {
    const [show, setShow] = useState(true)
    
    // const cargarPiloto = async (event) => {
    //     try {
    //       event.preventDefault();
    //       console.log("información enviada");
      
    //       const formData = new FormData();
    //       formData.append("nombre", event.target[0].value);
    //       formData.append("apellido", event.target[1].value);
    //       formData.append("edad", event.target[2].value);
    //       formData.append("apodo", event.target[3].value);
    //       formData.append("img", event.target[4].files[0]);
      
    //       const response = await fetch("http://localhost:4000/cargarPiloto", {
    //         method: "POST",
    //         body: formData,
    //         headers:{
    //             "Content-type": "multipart/form-data"
    //         } 
    //       });
      
    //       if (response.ok) {
    //         console.log("Piloto cargado correctamente");
    //         setShow(false);
    //       } else {
    //         console.error("Error al cargar el piloto");
    //       }
    //     } catch (error) {
    //       console.error("Error en la solicitud:", error);
    //     }
    //   };onSubmit={(event)=>cargarPiloto(event)---agregar todo esto en la etiqueta form. 
    return (
        <Fragment>
        {show? 
            
          
            <form className="formpilotos d-flex flex-column w-25 gap-2">
            <button className= "btn btn-active d-flex align-self-end m-2 btn-x-sm" onClick={()=>setShow(false)}>X</button>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre"/>
            
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido"/>
            
            <label htmlFor="edad">Edad</label>
            <input type="number" id="edad" name="edad"/>
            
            <label htmlFor="apodo">Apodo</label>
            <input type="text" id="apodo" name="apodo"/>

         <label  htmlFor="imagen-piloto">Cargar imagen</label>
        <input className="ms-2" type="file" id="img" name="img"/>

            <input type="submit" value={"Enviar"} className="nav-link botonav form p-2"/>
        </form>: <button  className=" btn-del form p-2"> Piloto cargado/modificado correctamente</button>}
    </Fragment>)} 
