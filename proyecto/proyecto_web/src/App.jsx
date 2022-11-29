import React from 'react';
import './App.css';
import Recetario from './components/Paginas/Recetario/Recetario';
import { Route, Routes } from 'react-router-dom';
import PesoIdeal from './components/Paginas/PesoIdeal/PesoIdeal';
import Programa from './components/Paginas/Programa/Programa';
import Recomendaciones from './components/Paginas/Recomendaciones/Recomendaciones';
import Registrate from './components/Paginas/Registrate/Registrate';
import Login from './components/Paginas/Login/Login';
import Home from './components/Paginas/Home/Home';

function App() {

  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/Recetario" element={<Recetario/>} />
        <Route path="/PesoIdeal" element={<PesoIdeal/>} />
        <Route path="/Programa" element={<Programa/>} />
        <Route path="/Recomendaciones" element={<Recomendaciones/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/Registrate" element={<Registrate/>} />

        
        </Routes>



    </div>
  );
}

export default App
