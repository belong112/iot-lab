import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import $ from 'jquery';

class Navbar extends Component {
  componentDidMount() {
    $('.nav-link').on('click', function(){
      $('.navbar-collapse').removeClass('show');
    });
  }

  render() {
    return (
    	<header>
        <div className="main-container">
        <div className="first-container text-justify"> 
            <NavLink to="/"><h1>Internet Research Lab</h1></NavLink> 
            <a target="_blank" rel="noopener noreferrer" href="https://www.ntu.edu.tw/" ><img alt="ntu_logo" src={require('../img/ntu.png')}/></a>
            <h5>National Taiwan University</h5>          
        </div>
        <div className="navbar-container">
            <nav id="navbar" className="navbar navbar-expand-xl navbar-dark fixed" style={{transition: ".5s"}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06">
                    <span className="navbar-toggler-icon"></span>
                </button>   
                <span className="navbar-brand" style={{color:'white'}}>Internet Research Lab</span>            
                <div className="collapse navbar-collapse navbar-items" id="navbarsExample06">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">首頁</NavLink>
                        </li>                        
                        <li className="nav-item active"> 
                          <NavLink onClick={this.close} className="nav-link" to="/research">關於我們</NavLink>
                        </li> 
                        <li className="nav-item active"> 
                          <NavLink className="nav-link" to="/news">最新消息</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/advisor">指導教授</NavLink>
                        </li>                        
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/project">論文發布</NavLink>
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