import React, { useState } from 'react';
import logo from "../../../assets/logo.png"
import './Login.css';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom/dist";
import { toast } from 'react-toastify';
import { useUserContext } from '../../../contexts/UserContext';

const Login = ({ onLogin = () => { } }) => {
  const {logout, user} = useUserContext();
  
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    console.log("Token del usuario: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setValues(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

 useEffect(() => {
  /* global google*/
  google.accounts.id.initialize({
     client_id:"565506521532-adaqta7s7gt30rkgqeqsu6b3mv0ch3qn.apps.googleusercontent.com",
     callback: handleCallbackResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large"}
  );
 }, []);
 const [identifier, setIdentifier] = useState("");
 const [password, setPassword] = useState("");

 const errors = {
  "identifier": !identifier,
  "password": !password,
 }

 const hasErrors = () => Object.values(errors).some(error => error);

 const onSubmitHandler = (e) => {
  e.preventDefault();

  if (hasErrors()) {
    toast.warn("Wrong fields");
    return;
  }
  onLogin(identifier, password);
 }

    return(
      
        <div className="login">
            <h1 className="loginTitle"> Bienvenidos a healthy life</h1>
            
            <div className="wrapper">
            
                <div className="derecha">
                

                  <div className="loginButton google">
                    <div id='signInDiv'>
                    
                    </div>
                  </div>
                
                </div>
                <div className="center">
                <div className="line"/>
                <di className="or">Ó</di>
                </div>
                
                <div className=" izquierda ">
                
                    <form onSubmit={onSubmitHandler}>
                    {
                      !user ?
                     <>
                     <input 
                     className="textregistrar" 
                     name='identifier'
                     type={"text"} 
                     autoComplete='username'
                     value={identifier}
                     placeholder="Username"
                     onChange={({ target }) => { setIdentifier(target.value) }}
                     />
                     <input 
                     className="textregistrar" 
                     name='password'
                     type={"password"} 
                     autoComplete='current-password'
                     value={password}
                     placeholder="password"  
                     onChange={({ target }) => { setPassword(target.value) }}          
                     /></> : <>
                      <label className='cerrarS'><h4>cerrar sesion</h4></label></>}
                     {
                      !user ?
                     <>
                     <button className="botoninicio" type="submit" 
                     disabled={hasErrors()}>Login</button>
                     <label className="linkregistrar"><Link to="/Registrate">¿No tienes cuenta? Registrate.</Link> </label>
                     </>: <>
                   <button className="botonsalir" onClick={() => { logout()}}> Sign out</button> </>
                     }
                    </form>
                  
                </div>
            </div>
            <img src={logo} alt="logo" className="logo"></img>
      </div>
    )
}

export default Login