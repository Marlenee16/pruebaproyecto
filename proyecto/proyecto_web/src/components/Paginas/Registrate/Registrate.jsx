import { useState } from "react";
import './Registrate.css';
import FormInput from "../CompleRegistrate/CompleRegistrate";
import logo from "../../../assets/logo.png"

import {useNavigate, Link } from 'react-router-dom';

const LoginForm = ({ onRegister = () => { } }) =>{

  const navigate = useNavigate();
  const [username, setUsername ] = useState("");
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const [confirmPassword, setRePassword ] = useState("");

  const errors = {
    "username": !username || username.length < 4 || username.length > 32,
    "email": !email,
    "password": !password || !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/.test(password),
    "confirmPassword": !confirmPassword || password !== confirmPassword
  }
  const hasErrors = () => Object.values(errors).some(error=> error);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  
    if (hasErrors()) {
      toast.warn("Wrong fields");
      return;
    }
    onRegister(username, email,password);
   }
    
   
    return(

        <div className="New">
        <form id="tablas" onSubmit={onSubmitHandler}>
        <div className="logoR"><img src={logo} alt="logo"></img>
        <h1>Registrate</h1></div>
      <div className="formInput">
        <label className="labelR">
          username de Usuario
            <input className="inputregis"
               
               name='username'
               type={"text"} 
               autoComplete='username'
               value={username}
               placeholder="Username de usuario"
               onChange={({ target }) => { setUsername(target.value) }}
             /><span className="Span">{"¡El username de usuario debe tener entre 5 y 25 caracteres y no debe incluir ningún carácter especial!"}</span>
        </label>

        <label className="labelR">
          Correo
            <input className="inputregis"
               
               name='email'
               type={"email"} 
               autoComplete='email'
               value={email}
               placeholder="e.g. example@example.com"
               onChange={({ target }) => { setEmail(target.value) }}
             /><span className="Span">{"Debe ser una dirección de correo electrónico válida."}</span>
        </label>
        
        <label className="labelR">
          Contraseña
            <input className="inputregis"
               
               name='password'
               type={"password"} 
               autoComplete="new-password"
               value={password}
               placeholder="Contraseña"
               onChange={({ target }) => { setPassword(target.value) }}
             /><span className="Span">{"¡La contraseña debe tener entre 8 y 20 caracteres e incluir al menos 1 letra, 1 número y 1 carácter especial!"}</span>
        </label>

        <label className="labelR">
          Confirmar Contraseña
            <input className="inputregis"
               
               name='confirmPassword'
               type={"password"} 
               autoComplete='new-password'
               value={confirmPassword}
               placeholder="Confirmar Contraseña"
               onChange={({ target }) => { setRePassword(target.value) }}
             /><span className="Span">{"¡Las contraseñas no coinciden!"}</span>
        </label>
      </div>
         <button className="guardarnew" type="submit" disabled={hasErrors()} onClick={() => {navigate("/Login")}} >Guardar</button>
        <label className="botonn"><Link to="/Login">¿ya tienes una cuenta? Iniciar Sesion.</Link></label>
        </form>
      </div>
      
     );
    }

export default LoginForm;