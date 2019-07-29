import React, { Component } from 'react';
import horse from "../img/horse.jpg";

class Navbar extends Component {
  render() {
    return (
    	<header>
        <div className="first-container"> 
            <h1>Internet Research Lab</h1> 
            <h4 style={{fontFamily:"Arial"}}>National Taiwan University</h4>          
        </div>
        <div className="navbar-container">
            <nav id="navbar" class="navbar navbar-expand-xl navbar-dark" style={{transition: ".5s"}}>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navbar-items" id="navbarsExample06">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="./">首頁</a>
                        </li>
                        <li class="nav-item dropdown active">
                          <a class="nav-link dropdown-toggle" href="./research" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">關於我們</a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="./research">研究計畫</a>
                            <a class="dropdown-item" href="./advisor">指導教授</a>
                          </div>
                        </li>
                        <li class="nav-item active"> 
                          <a class="nav-link" href="./news">最新消息</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./member">實驗室成員</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./project">課程</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./contact">聯絡我們</a>
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