import React, { Component } from 'react';
import bgimg from "../img/4.jpg"
import $ from 'jquery'
import Sliders from "../components/Slider.js"
import { Table } from 'reactstrap'

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
    return (
      <div className="main-container">
            <Sliders/>        
            <div className='index-container'>
            	<div className="big-container row">            		
            		<div className="col-lg-8 container">
            			<h2 className="yahei container"><i className="fas fa-newspaper"></i> 最新消息</h2>
            			<Table bordered>
						        <thead align="center" style={{backgroundColor:"#f2fcfe"}}>
						          <tr>
						            <th>日期</th>
						            <th>消息內容</th>						            
						          </tr>
						        </thead>
						        <tbody>
						          <tr>
						            <td width="40px" scope="row">2019/3/18</td>
						            <td>物聯網中心參訪趨勢科技</td>
						          </tr>
						          <tr>
						            <td scope="row">2019/1/21</td>
						            <td>AIOT智慧物聯網論壇</td>
						          </tr>
						        </tbody>
						      </Table>
            		</div>

            	</div>  
              <div className="big-container row">
                
                <div className="col-lg container">
                  <h2 className="yahei"><i className="fas fa-home"></i> 關於實驗室</h2>
                  <p>&emsp;&emsp;「電信研究中心」於81年3月成立，並於106年更名為「物聯網研究中心」（以下簡稱本中心）。本中心整合國立臺灣大學電機資訊學院相關系所，為配合國家經濟發展及未來著眼跨領域研究，以期達成從感測器、通訊網路、應用服務至關鍵性軟硬體平台之深耕研究，並拓展與物聯網應用與系統相關領域專家之合作。</p>
                  
                </div>
                <div className="col-lg container">
                  <h2 className="yahei"><i className="fas fa-user-friends"></i> 執行計畫</h2>
                  <ul className="txtjustify">
                  	<li>5g edge computing</li>
                  	<li>VR/AR wirless lightweight and interactivity.</li>
                  	<li>Blockchain Trust framework for IoT and for 5G/6G</li>
                  </ul>
                  <a href="./research"><button className="btn btn-primary">more...</button></a>
                </div>
              </div>
            </div>
        </div>
    );
  }
}
export default Home;