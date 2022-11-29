import axios from "axios";

import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import "./Vitaminas.css"

const Vitaminas =()=>{
    const navigate = useNavigate();
    return(
        <>
         <h1>Recetas en vitaminas</h1>
        
        <hr></hr>
    
        <div className="Title">Ensalada Cesar</div>
        <div className="ParrafoReceta"><p>Ensalada Con Pollo</p></div>
        
        <div className="ImageReceta"></div>
        <img className="Closer" src="https://www.recetasderechupete.com/wp-content/uploads/2020/10/Ensalada-Cesar-final_.jpg"></img>
        <div className="PasosReceta"><p>1.Poner el pollo a la plancha, 2.Cortar la ensalada con tomates y pepinos. 3. Servir junto a su aderezo favorito</p></div>
        <h2 className="PuntuacionReceta">Puntuacion:4</h2>
        <hr></hr>
        
        <div className="Title">Omelet con salchicha</div>
        <div className="ParrafoReceta"><p>Tortilla de huevo con enmbutido</p></div>
        
        <div className="ImageReceta"></div>
        <img className="Closer" src="https://t2.rg.ltmcdn.com/es/posts/0/2/6/omelette_de_huevo_a_la_mexicana_10620_600_square.jpg"></img>
        <div className="PasosReceta"><p>.Revolver 5 huevos en un tazon. 2.Con la yema, mezclar con harina y sal. 3. Freir las salchichas y servir juntos</p></div>
        <h2 className="PuntuacionReceta">Puntuacion:3.5</h2>

        <div className="Title">Sopa de Pescado</div>
        <div className="ParrafoReceta"><p>Sopa de pescado con crema justamente balanceada</p></div>
        
        <div className="ImageReceta"></div>
        <img  className="Closer" src="https://i.blogs.es/243242/sopa-pescado2/840_560.jpg"></img>
        <div className="PasosReceta"><p>"1.Pelar el pescado y limpiar con jengibre. 2.Servir una gran cantidad de caldo con crema. 3. Freir por 20 minutos y servir con limon</p></div>
        <h2 className="PuntuacionReceta">Puntuacion:5</h2>
        <hr></hr>
        
    
        </>
    
    );

}

export default Vitaminas;
