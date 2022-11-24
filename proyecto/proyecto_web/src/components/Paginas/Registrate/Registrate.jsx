import { useState } from "react";
import './Registrate.css';
import FormInput from "../CompleRegistrate/CompleRegistrate";
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom/dist";

function Registrate (){

    const [values, setValues] = useState({
        nombre:"",
        email:"",
        contraseña:"",
        confirmPassword:"",
        checkbox:"",
      });

      const inputs = [
        {
          id:1,
          name:"nombre",
          type:"text",
          placeholder:"Nombre de Usuario",
          errorMessage:"¡El nombre de usuario debe tener entre 5 y 25 caracteres y no debe incluir ningún carácter especial!",
          label:"Nombre de Usuario",
          pattern:"^[A-Za-z]{5,25}$",
          unique: true,
          required: true
        },
        {
          id:2,
          name:"email",
          type:"email",
          placeholder:"Correo",
          errorMessage:"Debe ser una dirección de correo electrónico válida.",
          label:"Correo",
          unique: true,
          required: true
        },
        {
          id:3,
          name:"contraseña",
          type:"password",
          placeholder:"Contraseña",
          errorMessage:"¡La contraseña debe tener entre 8 y 20 caracteres e incluir al menos 1 letra, 1 número y 1 carácter especial!",
          label:"Contraseña",
          pattern: "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$",
          unique: true,
          required: true
        },
        {
          id:4,
          name:"confirmPassword",
          type:"password",
          placeholder:"Confirmar Contraseña",
          errorMessage:"¡Las contraseñas no coinciden!",
          label:"Confirmar Contraseña",
          pattern: values.contraseña,
          unique: true,
          required: true
        },
        {
          id:5,
          name:"checkbox",
          type:"checkbox",
          required: true,
          label:"aceptas nuestras condiciones de uso y politica de privacidad."
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