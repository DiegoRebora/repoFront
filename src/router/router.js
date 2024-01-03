import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/home'
import Carreras from '../pages/Carreras/carreras';
import Posiciones from '../pages/Posiciones/posiciones';
import Pilotos from '../pages/Pilotos/pilotos';
import React, { useState } from 'react';

export default function Router () {
  const[admin, setAdmin] = useState(false)
    return (
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home admin={admin} setAdmin={setAdmin}/>}/>
              <Route path="/pilotos" element={<Pilotos admin={admin} setAdmin={setAdmin}/>}/>
              <Route path="/carreras" element={<Carreras admin={admin} setAdmin={setAdmin}/>}/>
              <Route path="/posiciones" element={<Posiciones/>}/>


                
            </Routes>
         
         </BrowserRouter>
    )
}