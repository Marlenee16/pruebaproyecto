import { useState } from "react";
import './Datosint.css';
import { Link } from "react-router-dom/dist";

function Registrate (){

    const [values, setValues] = useState({
        edad:"",
        peso:"",
        altura:"",
        ejercicio:"",
        comida:"",
       
      });

      const inputs = [
        {
          id:1,
          name:"edad",
          type:"int",
          label:"Edad (Años)",
          unique: true,
          required: true
        },
        {
          id:2,
          name:"peso",
          type:"int",
          label:"peso",
          unique: true,
          required: true
        },
        {
          id:3,
          name:"altura",
          type:"int",
          label:"altura",
          unique: true,
          required: true
        },
        {
          id:4,
          name:"ejercicio",
          type:"int",
          label:"¿frecuencia que realizas ejercicio a la semana?:",
          unique: true,
          required: true
        },
        {
          id:5,
          name:"comida",
          type:"int",
          required: true,
          label:"¿Cuántas comidas al día te gustaría tener?:"
        }
      ]
    const handleSubmit = (e) => {
        e.preventDefault();   
   };
 
   const onChange = (e)=>{
     setValues({ ...values, [e.target.name]: e.target.value });
   }
 
   console.log(values);
    return(
        <div className="New">
        <form id="tablas" onSubmit={handleSubmit}>
        <div className="logoR"><img src={logo} alt="logo"></img>
        <h1>Registrate</h1></div>
        {inputs.map((input) => (
          <FormInput 
          key={input.id}
          {...input} 
          value={values[input.name]} 
          onChange={onChange}/>
        ))}
         <button className="guardarnew" onClick={(e) => {e.preventDefault();window.location.href='/login';}}>Guardar</button>
        <label className="botonn"><Link to="/Login">¿ya tienes una cuenta? Iniciar Sesion.</Link></label>
        </form>
      </div>
);
};

export default Registrate;