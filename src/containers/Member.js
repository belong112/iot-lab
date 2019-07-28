import React, { Component } from 'react';
import $ from 'jquery'

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
    return (
      <div class="main-container">
        <div id='test' class='index-container'>
            <div>
              <h1>實驗室成員</h1>
              <hr/>
            </div>
            <div class="tst row">
                <div class="col-lg-9 container">
                    <p>&emsp;本中心成員組成為國立臺灣大學電機資訊學院、電機工程學系、資訊工程學系等領域專家學者及教授共35名（依筆畫排列），研究無線電波、物聯網通訊與系統、資安、物聯網硬體、物聯網應用，並致力結合理論與實務。</p>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="portfolioFilter clearfix">
                            <a href="#" data-filter="*" class="current">全部成員</a>
                            <a href="#" data-filter=".radiowave">無線電波</a>
                            <a href="#" data-filter=".communicate">物聯網通信系統</a>
                            <a href="#" data-filter=".safe">資安</a>
                            <a href="#" data-filter=".iothard">物聯網硬體</a>
                            <a href="#" data-filter=".iotsoft">物聯網軟體</a>
                        </div>
                    </div>
                    <div class="portfolioContainer row">
                        <div class="iotsoft col-lg-3 container">
                            <img src="https://mir-s3-cdn-cf.behance.net/projects/202/cc99b535336825.Y3JvcCwxMzk1LDEwOTEsMCw3ODA.png" alt="image"/>
                            <div>徐依玲</div>
                        </div>
                        <div class="radiowave col-lg-3 container">
                            <img src="https://mir-s3-cdn-cf.behance.net/projects/202/d4cfa934191261.Y3JvcCw2MTMsNDc5LDQsMjA0.jpg" alt="image"/>
                            <div>蔡依玲</div>
                        </div>
                        <div class="iothard col-lg-3 container">
                            <img src="https://mir-s3-cdn-cf.behance.net/projects/202/be4b9728308865.55b92edb950fc.jpg" alt="image"/>
                            <div>賴怡鈴</div>
                        </div>
                        <div class="safe col-lg-3 container">
                            <img src="https://mir-s3-cdn-cf.behance.net/projects/202/12963199.548365055868a.png" alt="image"/>
                            <div>芳宜霖</div>
                        </div>
                        <div class="communicate col-lg-3 container">
                            <img src="https://mir-s3-cdn-cf.behance.net/projects/202/181a7b35469661.Y3JvcCw3NjUsNTk5LDY3LDA.png" alt="image"/>
                            <div>黃銀鈴</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Member;