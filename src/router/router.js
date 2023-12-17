import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/home'
import Carreras from '../pages/Carreras/carreras';
import Posiciones from '../pages/Posiciones/posiciones';
import Pilotos from '../pages/Pilotos/pilotos';

export default function Router () {
    return (
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/pilotos" element={<Pilotos/>}/>
              <Route path="/carreras" element={<Carreras/>}/>
              <Route path="/posiciones" element={<Posiciones/>}/>


                
            </Routes>
         
         </BrowserRouter>
    )
}