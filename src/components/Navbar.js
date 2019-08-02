import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
    	<header>
        <div className="main-container">
        <div className="first-container txtjustify"> 
            <NavLink to="/"><h1>Internet Research Lab</h1></NavLink> 
            <a target="_blank" href="https://www.ntu.edu.tw/" ><img src={require('../img/ntu.png')}/></a>
            <h5>National Taiwan University</h5>          
        </div>
        <div className="navbar-container">
            <nav id="navbar" className="navbar navbar-expand-xl navbar-dark fixed" style={{transition: ".5s"}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>   
                <a className="navbar-brand" style={{color:'white'}}>Internet Research Lab</a>            
                <div className="collapse navbar-collapse navbar-items" id="navbarsExample06">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">首頁</NavLink>
                        </li>                        
                        <li className="nav-item active"> 
                          <NavLink className="nav-link" to="/research">關於我們</NavLink>
                        </li> 
                        <li className="nav-item active"> 
                          <NavLink className="nav-link" to="/news">最新消息</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/advisor">指導教授</NavLink>
                        </li>                        
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/project">研究計畫</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/contact">聯絡我們</NavLink>
                        </li>                         
                    </ul>
                </div>
            </nav>            
        </div>
        </div>
      </header>
    );
  }
}
export default Navbar;