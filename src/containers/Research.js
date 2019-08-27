import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import vr from "../img/vr.png"
import bc from "../img/blockchain.png"
import ggggg from "../img/5g.png" 
import $ from "jquery"

class Research extends Component {
  componentDidMount(){
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(window).scrollTop() > 10) { 
          $('.back-to-top').css('opacity','.5');
      } else {
          $('.back-to-top').css('opacity','0');
      }
    });
  }
  render() {
    return (
      <div className="main-container">           
            <div className='index-container'>
              <div className="col-lg-12 text-justify yahei">
                <h1>研究計畫</h1>
                <ol className="breadcrumb bg-transparent p-1">
                  <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                  <li className="breadcrumb-item active">研究計畫</li>
                </ol>
                <hr/>
              </div>
              <div className="mx-3">
                <div className="mb-5 text-justify">
                  <div className="md-4">
                    <h2>實驗室目標</h2>
                    <p>to bring a better life to the citizens</p>
                    <p>The Internet Research Laboratory (IRL), led by Professor Wanjiun Liao of the Department of Electrical Engineering in the National Taiwan University, is engaged in cutting-edge network protocol design. Research in the IRL focuses on provision of solutions for problems encountered in today's Internet as well as Next Generation Internet with more potential applications. Our research activities cover the whole internet, including Broadband Internet, Wireless Internet and Adhoc Technologies, etc.</p>
                  </div>
                  <div className="mb-4">
                    <h2>目前計畫</h2>
                    <div className="three-icons row">
                      <div className="one-icon col-lg-4 col-md-12">
                        <div className="backgroundcircle">
                          <img alt='5g' src={ggggg}/>                      
                        </div>
                        <div className="words">
                          <p>5G</p>
                          <p>Edge computing and learning for computational offloading</p>
                        </div>            
                      </div>
                      <div className="one-icon col-lg-4 col-md-12">
                        <div className="backgroundcircle">
                          <img src={vr} alt='VR'/>                      
                        </div> 
                        <div className="words">
                          <p>VR/AR</p>
                          <p>Wireless, lightweight, and interactivity.</p>
                        </div> 
                      </div>
                      <div className="one-icon col-lg-4 col-md-6">
                        <div className="backgroundcircle">
                          <img src={bc} alt='blockchain'/>                      
                        </div>
                        <div className="words">
                          <p>Blockchain</p>
                          <p>Trust framework for IoT and for 5G/6G</p>
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>          
        </div>
    );
  }
}
export default Research;