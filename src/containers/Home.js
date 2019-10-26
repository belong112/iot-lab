import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="main-container">
            <img alt='bgimg' src={require('../img/bg1.png')} style={{width:"100%" ,height:"400px"}}/>       
            <div className='index-container'> 
              <div className="mb-5 row">                
                <div className="col-lg container">
                  <h2 className="yahei"><i className="fas fa-home"></i> 關於實驗室</h2>
                  <p>&emsp;&emsp;本實驗室指導教授為廖婉君教授，主要研究的方向分為三個組別，分別為區塊鏈物聯網組，VR/AR組和5G/6G邊緣運算組。本實驗室與外部企業及科技部皆有合作計畫，朝向尖端通訊發展。</p>
                  
                </div>
                <div className="col-lg container">
                  <h2 className="yahei"><i className="fas fa-user-friends"></i> 執行計畫</h2>
                  <ul className="text-justify">
                  	<li>5G edge computing</li>
                  	<li>VR/AR wirless lightweight and interactivity.</li>
                  	<li>Blockchain Trust framework for IoT and for 5G/6G</li>
                  </ul>
                  <NavLink to="/about"><button className="btn btn-outline-primary">more...</button></NavLink>
                </div>
              </div>
            </div>
        </div>
    );
  }
}
export default Home;