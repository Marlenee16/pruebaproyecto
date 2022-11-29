import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer"
import { useNavigate } from "react-router-dom";
import "./PesoIdeal.css"


function PesoIdeal (){
    const navigate =useNavigate();

    return(
    <>
    <Navbar/>


<h1 className="genero">Crear plan personalizado</h1>
<a className="agg">Genero :</a>
<div className="card_genero">
    <br/>

    <br/>
    <div className="gusto">
    <a className="ag" href="Datos">Femenino</a>
    <a className="ag" href="Datos">Masculino </a>
    </div>
    <div className="imagener">
    <img src="src/assets/gender1.jpg" alt="mujer" ></img>
    <img src="src/assets/gender2.jpg" alt="hombre" ></img>



    </div>
</div>

<hr/>
<Footer/>
    </>


)
}

export default PesoIdeal;

