import axios from "axios";

import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import "./Vegano.css"

const Vegano =()=>{
    const navigate = useNavigate();
    return(
        <>
        <h1>Recetas en proteinas</h1>
        
        <hr></hr>
    
        <div className="Title">Carne Guisada</div>
        <div className="ParrafoReceta"><p>Receta deliciosa con guiso de verduras</p></div>
        <div className="Calorias"> Calorias: 400 cal </div>
        <div className="ImageReceta"></div>
        <img className="Closer" src="https://saposyprincesas.elmundo.es/wp-content/uploads/2020/05/recetas-bajas-en-grasa-con-verdura.jpg"></img>
        <div className="PasosReceta"><p>1.Dejar la carne hirviendo por 45 minutos  a fuego lento, 2.Sazonarla con sal y pimienta, 3.Preparar un guiso y servir con arroz</p></div>
        <h2 className="PuntuacionReceta">Puntuacion:5</h2>
        <hr></hr>
        
        <div className="Title">Carne con papas</div>
        <div className="ParrafoReceta"><p>Receta deliciosa de carne  con papas al gusto</p></div>
        
        <div className="ImageReceta"></div>
        <img className="Closer" src="https://www.recetassalvador.com/base/stock/Recipe/187-image/187-image_web.jpg"></img>
        <div className="PasosReceta"><p>1.Partir la carne en trozos grandes, 2. Freir las papas en aceite. 3.Sevir junto a frijoles o semillas</p></div>
        <h2 className="PuntuacionReceta">Puntuacion:3.5</h2>

        <div className="Title">Carne Con arroz</div>
        <div className="ParrafoReceta"><p>Receta deliciosa con guiso de verduras</p></div>
        
        <div className="ImageReceta"></div>
        <img  className="Closer" src="https://placeralplato.com/files/2016/04/Carne-con-arroz-640x480.jpg?width=1200&enable=upscale"></img>
        <div className="PasosReceta"><p>"1.Cocinar la carne en una cacerola, 2.Dejar el arroz cociendo en abudnante agua, 3.Servir juntos y con 20 gramos de sal</p></div>
        <h2 className="PuntuacionReceta">Puntuacion:5</h2>
        <hr></hr>
        
        </>
    
    );

}

export default Vegano;