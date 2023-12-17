import './nav.css'
import { Link } from 'react-router-dom';




export default function Nav({itemMenu}) {
    return(
    <header className="bg-dark">
      <nav className="navbar navbar-expand-lg w-100 bg-blue">
        <div className="container-fluid justify-content-between align-items-center">
            <Link to="/home" className="text-decoration-none">
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

            </ul>
          </div>
        </div>

      </nav>
    </header>
    )}
