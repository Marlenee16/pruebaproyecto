import Navbar from "../../Navbar/Navbar";
import "./Recomendaciones.css"
import Footer from "../../Footer/Footer";
import {useNavigate} from "react-router-dom"





function Recomendaciones (){
    const navigate =useNavigate();

    return(
    <>
    <Navbar/>

    <br/>
    <br/>
    <h1 className="reco">Recomendaciones, tips y consejos para tu vida saludable</h1>
    <br/>
    <br/>
    <br/>
<body className="bo">
    <div className="caja1" >
        <div className="image">
       <a className="image1"> <img  src="src/assets/ejercicio.jpg" alt="ejercitando"/> </a>
       </div>
       <div className="letra">
        <b><p className="tip">Tips a la hora de ejercitarte</p></b>
        <br/>
        <a className="masinfo" onClick={()=>navigate("/Ejercitarte")} >Leer mas </a>


       </div>

        </div>
        <br/>    
        <br></br>
        <br></br>

        <div className="caja1">
        <div className="image">
       <a className="image1"> <img  src="src/assets/comidamala.jpg" alt="ejercitando"/> </a>
       </div>
       <div className="letra">
        <b><p className="tip">Alimentos perjudiciales para la salud</p></b>
        <br/>
        <a className="masinfo" onClick={()=>navigate("/Comida")} > Leer mas </a>
    </div>
    </div>

        <br/>    
        <br></br>
        <br></br>

        <div className="caja1">
        <div className="image">
       <a className="image1"> <img  src="src/assets/fruta.jpg" alt="ejercitando"/> </a>
       </div>
       <div className="letra">
        <b><p className="tip">Frutas que se recomienda ingerir con frecuencia</p></b>
        <br/>
        <a className="masinfo" onClick={()=>navigate("/Fruta")} >Leer mas </a>
    </div>
    </div>
    <br></br>
        <br></br>

    <div className="caja1">
        <div className="image">
       <a className="image1"> <img  src="https://i.pinimg.com/564x/c4/80/ed/c480ed7e063ca12319f4412b575dc1b0.jpg" alt="egua"/> </a>
       </div>
       <div className="letra">
        <b><p className="tip">Cantidad de agua recomendable consumir en el dia</p></b>
        <br/>
        <a className="masinfo" onClick={()=>navigate("/Agua")} >Leer mas </a>
    </div>
    </div>

    <br></br>
        <br></br>

    <div className="caja1">
        <div className="image">
       <a className="image1"> <img  src="https://i.pinimg.com/564x/10/99/43/10994303df0623e36cf2eb942bcfb9f2.jpg" alt="estres"/> </a>
       </div>
       <div className="letra">
        <b><p className="tip">El estres daña tu salud</p></b>
        <br/>
        <a className="masinfo" onClick={()=>navigate("/Estres")} >Leer mas </a>
    </div>
    </div>

    <br></br>
        <br></br>
    <div className="caja1">
        <div className="image">
       <a className="image1"> <img  src="https://i.pinimg.com/474x/4c/e5/4c/4ce54cdad3ccd785d914fd12d29d28cc.jpg" alt="mitos"/> </a>
       </div>
       <div className="letra">
        <b><p className="tip">Mitos de la nutricion</p></b>
        <br/>
        <a className="masinfo" onClick={()=>navigate("/Mitos")} >Leer mas </a>
    </div>
    </div>



    </body>


        <br/>
        <br/>

        <Footer/>

    </>




)
}

export default Recomendaciones;