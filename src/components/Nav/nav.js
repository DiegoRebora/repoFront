import './nav.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav({ itemMenu, admin, setAdmin }) {
  const [login, setLogin] = useState(false);


const logIn = async (e) => {
  e.preventDefault();
  let token = "";
  const formData = new FormData(e.target);
  let fetchConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  };

  try {
      let respuesta = await fetch(`http://localhost:4000/usuario/login`, fetchConfig);
      let data = await respuesta.json();

      console.log(data);
      token=data.token;
      console.log(token)
  
      if (token.length > 0) {
        setAdmin(true);
        setLogin(false);
      } else {
      console.error("Not an admin");
    }
  } catch (err) {
    console.error(err);
  }
};
console.log(admin)
    return(
    <header className="bg-dark">
      <nav className="navbar navbar-expand-lg w-100 bg-blue justify-content-between">
        <div className="container-fluid justify-content-between align-items-center">
            <Link to="/" className="text-decoration-none">
            <h1 className="navbar-brand cursor-p">Suyai Racing Championship</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="bi bi-list" id="burger"></i>
            </button>
          <div className="navbar-collapse justify-content-end collapse" id="navbarSupportedContent">
            <ul className="navbar nav-pills p-4">
                <li className="nav-item m-2">
                  <Link to="/pilotos" className={itemMenu ==="Pilotos"?'nav-link btn-active p-2':'nav-link botonav p-2'}>Pilotos</Link>
                </li>
                <li className="nav-item m-2"> 
                  <Link to= "/carreras" className={itemMenu ==="Carreras"?'nav-link btn-active p-2':'nav-link botonav p-2'} >Carreras</Link>
                </li>
                <li className="nav-item m-2"> 
                  <Link to= "/posiciones" className={itemMenu ==="Posiciones"?'nav-link btn-active p-2':'nav-link botonav p-2'} >Posiciones</Link>
                </li>
                <li className="nav-item m-1">
                <button className={itemMenu ==="Home" ?'nav-link btn-active p-1 d-block':'nav-link botonav d-none'} onClick={() => setLogin(!login)}>Login</button>
                    <div className= {login ? "container-fluid column justify-content-end align-items-end d-block ":"container-fluid column justify-content-end align-items-end d-none" }>
                    <form onSubmit={(event) => { setLogin(false); logIn(event); }}>
                          <div className="mb-1">
                            <label htmlFor="usuario" className="form-label">Usuario</label>
                            <input type="text" className="form-control" id="usuario" name="usuario"/>
                          </div>
                          <div className="mb-1">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password"  name="password"/>
                          </div>
                          <button type="submit" className="nav-link botonav p-1">Enviar</button>
                    </form>
                  </div>
                </li>
                
            </ul>
          </div>
          </div>
       </nav>
    </header>
    )}
