import React, { Component } from 'react';
import horse from "../img/horse.jpg";
import logo from "../img/ntu.png"
import {Link} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
    	<header>
        <div className="first-container"> 
            <h1>Internet Research Lab</h1> 
            <a target="_blank" href="https://www.ntu.edu.tw/" ><img src={logo} width="50px" className="logo"/></a>
            <h4 style={{fontFamily:"Arial"}}>National Taiwan University</h4>          
        </div>
        <div className="navbar-container">
            <nav id="navbar" className="navbar navbar-expand-xl navbar-dark" style={{transition: ".5s"}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-items" id="navbarsExample06">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">首頁</Link>
                        </li>
                        <li className="nav-item dropdown active">
                          <a className="nav-link dropdown-toggle" href="/research" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">關於我們</a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="/research">研究計畫</a>
                            <a className="dropdown-item" href="/advisor">指導教授</a>
                          </div>
                        </li>
                        <li className="nav-item active"> 
                          <Link className="nav-link" href="/news">最新消息</Link>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/member">實驗室成員</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/project">課程</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/contact">聯絡我們</a>
                        </li>                         
                    </ul>
                </div>
            </nav>            
        </div>
      </header>
    );
  }
}
export default Navbar;