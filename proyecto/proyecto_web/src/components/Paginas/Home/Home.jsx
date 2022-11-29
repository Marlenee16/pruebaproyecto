import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./Home.css"

function Home(){

    return(
        
    <>
               <Navbar/>
   
              <body>

    <div className="contenedor1">

        <h1 className="one">Porque tu salud <br/> es primero </h1>
        <p className="somos">Somos una organizacion <br/> 
           encargada para la salud y <br/> 
           nutricion de la poblacion salvadoreña</p>
           <a className="button_comienza" href="Registrate">Comienza</a>


    
    <div className="image1">
    <div classname=" HomeImage"  > <img src="src/assets/HomeImage1.png" alt="Home_Image"></img> </div>
    </div>
    </div>
    <hr></hr>
        
        <h2>Conoce los diferentes servicios que tenemos para ti</h2>
    <div className="contenedor2">
    <div className="cards_Home">
      <a className="card_1">  <img src="src/assets/card1.png" alt="Card"></img> </a>
    </div>

    <div className="cards_Home">
    <a className="card_2"><img src="src/assets/manzana_home.png" alt="Image_Manzana"/> </a>
    <div className="contenido">
       <b> <p>Pierde grasa, <br/> gana musculo <br/> y mejora tu salud</p></b>
    </div>
    </div>

    </div>
    <div className="contenedor3"> 
    <div className="cards_Home">
    <a className="card_3"><img src="src/assets/campana.png" alt="Image_campana"/> </a>
    <div className="contenido">
        <p> <b>Recibe notificaciones <br/>sobre tu plan de alimentacion </b></p>
    </div>
    </div>

    <div className="cards_Home">
        <a className="card_4"><img src="src/assets/notificaciones.png" alt="notificaciones"/> </a>
    </div>
    </div>

    <div className="contenedor4">
    <div className="cards_Home">
        <a className="card_5"><img src="src/assets/pancakes.png" alt="Receta"/> </a>
    </div>

    <div className="cards_Home">
        <a className="card_6"><img src="src/assets/receta.png" alt="Recetario"/></a>
        <div className="contenido">
        <p> <b>Encontraras muchas recetas <br/> recomendadas por nutricionistas </b> </p>
    </div>
    </div>
    </div>
<hr></hr>
</body>

 

<Footer>

</Footer>
    </>




)
}



export default Home;

