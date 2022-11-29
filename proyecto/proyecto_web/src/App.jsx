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
import Proteinas from './components/Paginas/Recetario/Proteinas/Proteinas';
import Vitaminas from './components/Paginas/Recetario/Vitaminas/Vitaminas';
import Grasas from './components/Paginas/Recetario/Grasas/Grasas';
import Vegano from './components/Paginas/Recetario/Vegano/Vegano';
import Faciles from './components/Paginas/Recetario/Faciles/Faciles';
import Salvador from './components/Paginas/Recetario/Salvador/Salvador';
import Postres from './components/Paginas/Recetario/Postres/Postres';
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

        <Route path='/Proteinas' element={<Proteinas/>}/>
        <Route path='/Vitaminas' element={<Vitaminas/>}/>
        <Route path='/Grasas' element={<Grasas/>}/>
        <Route path='/Vegano' element={<Vegano/>}/>
        <Route path='/Faciles' element={<Faciles/>}/>
        <Route path='/Salvador' element={<Salvador/>}/>
        <Route path='/Postres' element={<Postres/>}/>
        </Routes>



    </div>
  );
}

export default App
