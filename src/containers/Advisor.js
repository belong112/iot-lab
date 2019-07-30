import React, { Component } from 'react';
import $ from 'jquery'
import photo from "../img/rick.jpg"

class Advisor extends Component {
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
              <div>
                <h1>指導教授</h1>
                <hr/>
              </div>  
              <div className="advisor-container row">
                  <div className="col-lg-3">
                    <img src={photo} style={{width: "100%"}} />
                  </div>
                  <div className="col-lg-6 prof-name">
                    <p>廖婉君   Wan-jiun Liao</p>
                    <ul>
                      <li>Distinguished Professor, Department of Electrical Engineering,NTU</li>
                      <li>Professor, Graduate Institute of Communication Engineering, NTU</li>
                      <li>Professor, Graduate Institute of Networking and Multimedia, NTU</li>
                    </ul>
                  </div>
              </div>
              <div className="bio-container row">
                <div className="col-lg-9 small-container">
                  <h2>Bio</h2>
                  <p>&emsp; Wanjiun Liao received the BS and MS degrees in Computer Science from National Chiao Tung University, Taiwan, in 1990 and 1992, respectively, and the Ph.D. degree in Electrical Engineering from the University of Southern California, Los Angeles, California, USA, in 1997. She is a Distinguished Professor of Electrical Engineering, National Taiwan University (NTU), Taipei, Taiwan. She is an Adjunct Research Fellow of Research Center for Information Techonology Innovation, Amercian Sinica, Taiwan. She is the General Director of Engineering Division in the Ministry of Science and Technology in Taiwan. Her research interests are focused on the design and analysis of wireless and multimedia networking, green communications, on-line social network analysis, and cloud networking.</p>
                  <p>&emsp;Prof. Liao was an Associate Editor of IEEE Transactions on Wireless Communications and IEEE Transactions on Multimedia, and served on the organizing committees of many international conferences. She was an IEEE Communications Society (ComSoc) Distinguished Lecturer, an IEEE Fellow Committee member, and the IEEE ComSoc Asia Pacific Board (APB) Director. She is on IEEE Award Board Award Review Committee and IEEE Transactions on Mobile Computing Steering Committe.</p>
                </div>                
                <div className="col-lg-9 small-container">
                  <h2>Research</h2>
                  <p>&emsp;Professor Wanjiun Liao's research interests focus mainly on the design and analysis of network protocols to support multimedia applications over wireless networks. She was an Associate Editor for IEEE Transactions on Multimedia and IEEE Transactions on Wireless Communications. On-going research includes</p>
                  <ol>                
                    <li>無線網路: 5G/B5G networks, 雲端網路暨邊緣運算, AI-based resource management (deep reinforcement learning)</li>
                    <li>多媒體網路: mobile AR/VR streaming </li>
                    <li>區塊鏈 (安全共識機制、隱私權保護、跨鍊技術) 及數據分析</li>
                    <li>IoT技術: Industrial IoT, IoT for utility networks</li>
                  </ol>
                </div>
              </div>              
            </div>
        </div>
    );
  }
}
export default Advisor;