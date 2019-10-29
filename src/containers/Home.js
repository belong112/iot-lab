import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="main-container">
            <img alt='bgimg' src={require('../img/bg1.png')} style={{width:"100%" ,maxHeight:"400px"}}/>       
            <div className='index-container'> 
              <div className="mb-5 row">                
                <div className="col-lg container">
                  <h2 className="yahei"><i className="fas fa-home"></i> 關於實驗室</h2>
                  <p className='text-left'>&emsp;&emsp;本實驗室指導教授為廖婉君教授，主要研究分為三個組別，分別為區塊鏈物聯網組，
                      VR/AR 組和 5G/6G 邊緣運算組。各組與外部企業及科技部皆有合作計畫，朝向尖端通訊發展，改善當今網路遭遇之問題。</p>                  
                </div>
                <div className="col-lg container">
                  <h2 className="yahei"><i className="fas fa-user-friends"></i> 執行計畫</h2>
                  <ul className="text-left">
                  	<li>5G edge computing</li>
                  	<li>VR/AR 智慧醫療:邊緣運算及垂直應用</li>
                    <li>區塊鏈和AIoT之應用</li>
                  	<li>智慧水務即時監控系統</li>
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