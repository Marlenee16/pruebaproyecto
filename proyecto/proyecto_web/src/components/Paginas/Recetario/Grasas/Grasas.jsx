import axios from "axios";

import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import "./Grasas.css"

const Grasas =()=>{
    const navigate = useNavigate();
    return(
        <>
        <h1>Recetas con grasa</h1>
        
        <hr></hr>
    
        <div className="Title">Tocino</div>
        <div className="ParrafoReceta"><p>Pellejo de cerdo caramelizado</p></div>
        <div className="Calorias"> Calorias: 800 cal </div>
        <div className="ImageReceta"></div>
        <img className="Closer" src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/10/como-caramelizar-tocino-receta.jpg"></img>
        <div className="PasosReceta"><p>1.Poner el tocino sin aceite, 2.Prender la cacerola y poner un poco de caramelo. 3.Traer un poco de barbacoa y servir</p></div>
        <h2 className="PuntuacionReceta">Puntuacion:5</h2>
        <hr></hr>
        
        <div className="Title">Hamburguesa tradicional</div>
        <div className="ParrafoReceta"><p>Receta deliciosa de carne  con papas al gusto</p></div>
        
        <div className="ImageReceta"></div>
        <img className="Closer" src="https://progcarne.com/storage/app/uploads/public/60f/9b1/e8e/60f9b1e8e5dc2774215154.jpg"></img>
        <div className="PasosReceta"><p>1.Preparar el pan, 2. Dejar las papas friendo por 30 minutos, 3.Cocinar la carne molida, 4. Cortar la ensalada, cebolla y tomate. 5.Servir todo junto y disfrutar</p></div>
        <h2 className="PuntuacionReceta">Puntuacion:5</h2>
        <hr></hr>

        <div className="Title">Pizza con Pepeoroni</div>
        <div className="ParrafoReceta"><p>Pizza a la italiana con mucho sabor</p></div>
        
        <div className="ImageReceta"></div>
        <img  className="Closer" src="https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale"></img>
        <div className="PasosReceta"><p>"Preparar la masa, 2.Calentar queso mozarella, 3.Meter al horno por 30 minutos con el peperoni, 4.Disfrutar</p></div>
        <h2 className="PuntuacionReceta">Puntuacion:5</h2>
        <hr></hr>
        
        </>
    
    );

}

export default Grasas;