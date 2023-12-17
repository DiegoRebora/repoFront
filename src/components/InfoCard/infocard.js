export default function InfoCard ({nombre,apellido,edad,apodo,setShow}) {
    return (
        <div className= "d-flex p-5 flex-column align-items-center learnmore-section">
            
            <button className= "btn btn-active d-flex align-self-end m-2 btn-x-sm" onClick={()=>setShow(false)}>X</button>
            
            <ul className="list-group">
            <li className="list-group-item p-3 d-flex flex-column">
                <h4>Nombre:</h4>
                <span className="fw-bold">{nombre}</span></li>
                <li className="list-group-item p-3 d-flex flex-column">
                <h4>Apellido:</h4>
                <span className="fw-bold">{apellido}</span></li>
                <li className="list-group-item p-3 d-flex flex-column">
                <h4>Edad:</h4>
                <span className="fw-bold">{edad}</span></li>
                <li className="list-group-item p-3 d-flex flex-column">
                <h4>Apodo</h4>
                <span className="fw-bold">{apodo}</span></li>
            </ul>


        </div>


    )
}