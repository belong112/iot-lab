import React, { Component } from 'react';
import { Table } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import data from '../data/data.js'

class Home extends Component {
  render() {
    const events = data.posts.map((item,id) =>{
      if(id < 5)
      return(
        <tr>
          <td>{item.date}</td>
          <td>{item.title}</td>
        </tr>
      )
    })
    return (
      <div className="main-container">
            <img alt='bgimg' src={require('../img/bg1.png')} style={{width:"100%" ,height:"400px"}}/>       
            <div className='index-container'>
            	<div className="mb-5 row">            		
            		<div className="col-lg-8 container">
            			<h2 className="yahei text-center"><i className="fas fa-newspaper"></i> 最新消息</h2>
            			<Table bordered>
						        <thead align="center" style={{backgroundColor:"azure"}}>
						          <tr>
						            <th width="40px" scope='row'>日期</th>
						            <th>消息內容</th>						            
						          </tr>
						        </thead>
						        <tbody>
						          {events}
						        </tbody>
						      </Table>
            		</div>

            	</div>  
              <div className="mb-5 row">                
                <div className="col-lg container">
                  <h2 className="yahei"><i className="fas fa-home"></i> 關於實驗室</h2>
                  <p> 團隊由廖婉君博士為首，與2位博士生、4位碩士生和3位大學部學生等成員組成。成員遍布台大電機系、台大資工系、台大物聯網研究中心、成大數位生活中心。並同時和國內中華電信、交通部、趨勢科技等多個科研單位和企業，國外Daimler Mercedes Benz、Accenture 有合作。</p>
                  
                </div>
                <div className="col-lg container">
                  <h2 className="yahei"><i className="fas fa-user-friends"></i> 執行計畫</h2>
                  <ul className="text-justify">
                  	<li>5g edge computing</li>
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