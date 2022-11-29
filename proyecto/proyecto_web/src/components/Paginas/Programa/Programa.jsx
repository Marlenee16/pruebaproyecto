import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./Programa.css"
function Programa (){

    return(
    <>
    <Navbar/>
    <div className="contenedor">
    <img src="./src/assets/imagenverduras.png"></img>
    <p> <b>Recomiendanos para <br/>
        llegar a mas personas </b>
    </p>

    <p className="parrafo2">
    <b>
        Porque si nos cuidamos, <br/>
        nos cuidamos entre todos, <br/>
        ayudanos a llegar a mas </b>
    </p>

    <a className="unete" href="Registrate" > <b> Unete </b></a>

    </div>
    <body>

    <h2> ¿Como Funciona? </h2>
    <div className="funcion">
    <br></br>
    <br></br>
    <div className="cards">
        <img src="src/assets/registrate.png" alt="registrate"></img>

        <div className="contenido">
            <h3>REGISTRATE</h3>
            <p>Totalmente gratuito, llena tus datos e inicia sesión para empezar</p>
        </div>
    </div>

    <div className="cards">
        <img src="src/assets/recomienda.png" alt="recomienda" />
    <div className="contenido">
        <h3>RECOMIENDANOS</h3>
        <p>Hablales sobre nosotros a tus amigos y muestrales nuestros servicios </p>
    </div>
    </div>

    <div className="cards">
        <img src="src/assets/aporta.png" alt="aporta"></img>
        <div className="contenido">
        <h3>APORTA</h3>
        <p> Comparte con los demas, tus experiencias con la pagina y que podemos mejorar</p>
    </div>
    </div>
    </div>

    <div className="preguntas">
    <h4>PREGUNTAS FRECUENTES</h4>

    < div className="interrogantes">
    <h5> ¿Como funciona? </h5>
        <p> Nos recomiendas y de esa manera compartes con los demas,<br/>los conocimientos de esta aplicacion, asi mismo habra una caja de comentarios <br/> para que puedas compartir experiencias o recetas.  </p>
    
        <h5> ¿Tiene un precio? </h5>
        <p> Como se mencionó al inicio la apliacion es de uso totalmente gratuito, <br/>por lo que no te cuesta nada compartirla y recomendarla, asi ayudaras a más personas.<br/> Si tienes algun comentario y posees cuenta,con total confianza,   
        <a className="link_comentarios" href="Comentarios"> Entra aqui.</a></p>
    </div>
    </div>

        <hr>
        
        </hr>


    </body>
<Footer>

</Footer>

    </>


)
}

export default Programa;