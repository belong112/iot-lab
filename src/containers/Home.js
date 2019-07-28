import React, { Component } from 'react';
import bgimg from "../img/4.jpg"
import $ from 'jquery'
import Sliders from "../components/Slider.js"

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
                <div className="col-lg container">
                  <h2><i className="fas fa-newspaper"></i> news</h2>
                  <div>
                    <ul className="news">
                      <li>2019/02/19 物聯網中心參訪趨勢科技</li>
                      <li>2018/11/29 AIOT智慧物聯網論壇</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg container">
                  <h2><i className="fas fa-home"></i>  about us</h2>
                  <p>&emsp;&emsp;「電信研究中心」於81年3月成立，並於106年更名為「物聯網研究中心」（以下簡稱本中心）。本中心整合國立臺灣大學電機資訊學院相關系所，為配合國家經濟發展及未來著眼跨領域研究，以期達成從感測器、通訊網路、應用服務至關鍵性軟硬體平台之深耕研究，並拓展與物聯網應用與系統相關領域專家之合作。</p>
                  <a href="research.html">more...</a>
                </div>
                <div className="col-lg container">
                  <h2><i className="fas fa-user-friends"></i> member crew</h2>
                  <p>&emsp;&emsp;本中心成員組成為國立臺灣大學電機資訊學院、電機工程學系、資訊工程學系等領域專家學者及教授共35名，研究無線電波、物聯網通訊與系統、資安、物聯網硬體、物聯網應用，並致力結合理論與實務。</p>
                  <a href="people.html">more...</a>
                </div>
              </div>
            </div>
        </div>
    );
  }
}
export default Home;