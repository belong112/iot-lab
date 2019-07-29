import React, { Component } from 'react';
import $ from 'jquery'
import Mycard from "../components/Mycard"
var t=[1,1,1,1,1]

class Member extends Component {
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
    const membercards = t.map((index) => {
      return (
        <div className="col-lg-6">
          <Mycard/>   
        </div>        
      );
    })
    return (
      <div className="main-container">
        <div id='test' className='index-container'>
            <div>
              <h1>實驗室成員</h1>
              <hr/>
            </div>
            <div class="tst row">
                <div class="col-lg-9 container">
                    <p>&emsp;本中心成員組成為國立臺灣大學電機資訊學院、電機工程學系、資訊工程學系等領域專家學者及教授共35名（依筆畫排列），研究無線電波、物聯網通訊與系統、資安、物聯網硬體、物聯網應用，並致力結合理論與實務。</p>
                </div>
            </div>
            <div>
              <div className="col-lg-9"></div>
            </div>
            <div className="row">
              {membercards}
            </div>
                           
        </div>
      </div>
    );
  }
}
export default Member;