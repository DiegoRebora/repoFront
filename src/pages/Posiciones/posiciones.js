import Nav from '../../components/Nav/nav.js'
import './posiciones.css'
import { Fragment } from 'react'

export default function Posiciones() {
    return(
        <Fragment>
            <Nav itemMenu={"Posiciones"}/>
            <main className='posiciones-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75'>
                <h2 className="row suyai-text justify-content-center align-items-center py-5">Posiciones</h2>
                
            </main>

        </Fragment>
    )
}