import Navbar from "../../Navbar/Navbar";
import "./Recomendaciones.css"
import Footer from "../../Footer/Footer";





function Recomendaciones (){

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
        <a className="masinfo" href="/Ejercitate" >Leer mas </a>


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
        <a className="masinfo" href="Alimentos" > Leer mas </a>
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
        <a className="masinfo" href="Fruta" >Leer mas </a>
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