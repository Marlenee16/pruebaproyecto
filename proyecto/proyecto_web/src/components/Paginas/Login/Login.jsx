import React from 'react';

import logo from "../../../assets/logo.png"
import './Login.css';
import { useEffect} from 'react';
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom/dist";

function Login () {
  

  

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
                     <input className="textregistrar" type="text" placeholder="Username"/>
                     <input className="textregistrar" type="text" placeholder="password"/>
                     <button className="botoninicio" type="button" 
                     onClick={(e) => {e.preventDefault();window.location.href='/Prueba';}}>Login</button>
                     <label className="linkregistrar"><Link to="/New">¿No tienes cuenta? Registrate.</Link> </label>
                </div>
            </div>
            <img src={logo} alt="logo" className="logo"></img>
      </div>
    )
}

export default Login