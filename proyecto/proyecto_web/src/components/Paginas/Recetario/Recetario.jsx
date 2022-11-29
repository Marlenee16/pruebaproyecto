import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import React,{useState,useEffect} from "react";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Recetario.css"



function Recetario (){

    const [recetas, setRecetas]= useState([]);//dinamica
    const [tablaUsuarios, setTablaUsuarios]= useState([]);//estatica
    const [busqueda, setBusqueda]= useState("");//para la barra de busqueda
    const navigate =useNavigate();
    const [show, setShow] =useState(true);

    const formHandler  = (e) => {
        console.log('hola');
        //https://jsonplaceholder.typicode.com/users
    //http://localhost:3000/api/recetas
        axios.get('http://localhost:3000/api/recetas')
            .then((respuesta) =>{
                setRecetas(respuesta.data);
                console.log(respuesta.data);
                     
            })
            .catch((error) =>{image.png
                console.log(error);
            })
        
        e.preventDefault();
    }

    /*
    const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setUsuarios(resultadosBusqueda);
}
    */
    //Aqui va la funcion
    const peticionGet=async()=>{
      await axios.get("http://localhost:3000/api/recetas")
      .then(response=>{
        console.log(response.data)
        //setRecetas(JSON)
        /*
        setRecetas(response.data);
        setTablaUsuarios(response.data);
        */
      }).catch(error=>{
        console.log(error);
      })
    }

    //trayendo los datos
    useEffect(()=>{
      peticionGet();
      },[])
      //Mostrando los datos
      const Recetarios =() =>{
        const FetchRecetarios = async() =>{
          const {data} = await axios.get("/recetas")
          setRecetas(data.recetas)
        }
      }

    

    return(

    <>
          <Navbar/>

        <h1 className="reset">Recetario</h1><img className="Icon_Receta" src="https://cdn-icons-png.flaticon.com/512/683/683488.png"></img>
  <form className="formulariodebarra" action="#" method="POST" >
      <div className="dolocrim">
        <input className="buscar_texto" type="text" placeholder="BUSCA TU RECETA"></input>
                <button onClick={formHandler} className="michael">Buscar </button>
      </div>
  </form>
  
        <h1 className="reset">recetas</h1>
    <div className="Recetas_container">
    <div className="box"><a className="Justin">Recetas en proteinas</a></div><button className="Punk" onClick={()=>navigate("/Proteinas")}>Ver</button>
    <div className="box"><a className="Justin">Recetas en Vitaminas</a></div><button className="Punk" onClick={()=>navigate("/Vitaminas")}>Ver</button>
    <div className="box"><a className="Justin">Recetas en Grasa</a></div><button className="Punk" onClick={()=>navigate("/Grasas")}>Ver</button>
    <div className="box"><a className="Justin">Recetas Veganas</a></div><a className="Punk" href="/Vegano">Ver</a>
    </div>
   

    <div>
      <button  type="button" className="Desplegable" onClick={()=>setShow(!show)}>ver mas</button>

    <div className="Recetas_container_sub">
    <div className="box"><a className="Justin">Recetas Faciles</a></div><button className="Punk" onClick={()=>navigate("/Faciles")}>Ver</button>
    <div className="box"><a className="Justin">Recetas salvadorenas</a></div><button className="Punk" onClick={()=>navigate("/Salvador")}>Ver</button>
    <div className="box"><a className="Justin">Postres</a></div><button className="Punk" onClick={()=>navigate("/Postres")}>Ver</button>
    

    </div>
   
    </div>
    {/* const mappedPost = posts.map(post =>{
        return (
            <SinglePost 
            key = { post._id }
            title = {post.title}
            description = {post.description}
            image = {post.image}
            />
        );
<div className = {classes["posts"]}>
                { mappedPost }
            </div> */}

            <Footer/>
    </> 

);
}

export default Recetario;