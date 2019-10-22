import React, { Component } from 'react';
import $ from 'jquery'
import { Table } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import data from '../data/data.js'

class Home extends Component {
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
                  <p>&emsp;The Internet Research Laboratory (IRL), led by Professor Wanjiun Liao of the Department of Electrical Engineering in the National Taiwan University, is engaged in cutting-edge network protocol design</p>
                  
                </div>
                <div className="col-lg container">
                  <h2 className="yahei"><i className="fas fa-user-friends"></i> 執行計畫</h2>
                  <ul className="text-justify">
                  	<li>5g edge computing</li>
                  	<li>VR/AR wirless lightweight and interactivity.</li>
                  	<li>Blockchain Trust framework for IoT and for 5G/6G</li>
                    <li>基於區塊鏈的汽車共享和租賃平台</li>
                    <li>融合區塊鏈技術的 NB-IoT SIM/eSIM卡設計</li>
                    <li>遊覽車區塊鏈共享賬本</li>
                    <li>醫療區塊鏈隱私保護和權限控管</li>
                    <li>基於區塊鏈技術的票據交換</li>
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