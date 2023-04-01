import * as React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './app/Private/Home';
import Perfil from './app/Private/Perfil';

import Login from './app/Public/Editar_senha';
import Register from './app/Public/Editar_senha';
import Recuperar_senha from './app/Public/Editar_senha';
import Editar_senha from './app/Public/Editar_senha';

function App() {

  return (
    <BrowserRouter>
         <Routes>
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
             <Route path="/recuperar_senha" element={<Recuperar_senha />} />
             <Route path="/editar_senha" element={<Editar_senha />} />

             <Route path="/inicio" element={<Home />} />
             <Route path="/perfil" element={<Perfil />} />
         </Routes>
    </BrowserRouter>
  )
}

export default App
