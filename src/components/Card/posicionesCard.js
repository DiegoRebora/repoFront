import './card.css'

export default function PosicionesCard({id_piloto, nombre_piloto, puntaje_total }) {
    



    return(

            <tr>
                <td>{id_piloto}</td>
                <td>{nombre_piloto}</td>
                <td>{puntaje_total}</td>
            </tr>

    )
    
}