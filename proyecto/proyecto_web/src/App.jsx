import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Recetario from './components/Paginas/Recetario/Recetario';
import { Route, Routes } from 'react-router-dom';
import PesoIdeal from './components/Paginas/PesoIdeal/PesoIdeal';
import Programa from './components/Paginas/Programa/Programa';
import Recomendaciones from './components/Paginas/Recomendaciones/Recomendaciones';
import Bienvenida from './components/Bienvenida';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
            <Navbar/>
            <Bienvenida/>

            
      <Routes>
        
        <Route path="/Recetario" element={<Recetario/>} />
        <Route path="/PesoIdeal" element={<PesoIdeal/>} />
        <Route path="/Programa" element={<Programa/>} />
        <Route path="/Recomendaciones" element={<Recomendaciones/>} />
        </Routes>
        <Bienvenida/>



    </div>
  );
}

export default App
