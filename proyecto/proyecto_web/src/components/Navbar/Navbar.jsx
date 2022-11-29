import React, {Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css"

class Navbar extends Component {

  state = {clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render () {
      return (

        <nav className="NavbarItems" >
         <a href="/Registrate"> </a> <h1 className="navbar-logo"> Healthy Life  <img src="logo.png" alt="logo"></img></h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>

          </div>
          <ul  className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map ((item, index) => {
              return(
                <li key= {index}> 
                <Link className={item.cName} to={item.url}> 
                      {item.title}
                </Link>
                 </li>
              )
            
            })}
           
          </ul>
          < a href="/Registrate"> <Button onClick={(e) => {e.preventDefault();window.location.href='/Registrate';}}> <b>Registrate</b> </Button></a>

        </nav>


      )


  }
}
export default Navbar;