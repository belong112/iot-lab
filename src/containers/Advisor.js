import React, { Component } from 'react';
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import photo from "../img/member_picture/wjliao.jpg"

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
              <div className="col-lg-12 text-justify yahei">
                <h1>指導教授</h1>
                <ol className="breadcrumb bg-transparent p-1">
                  <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                  <li className="breadcrumb-item active">指導教授</li>
                </ol>
                <hr/>
              </div>  
              <div className="justify-content-center my-5 row">
                  <div className="col-lg-4">
                    <img alt='professor' src={photo} style={{height:"300px"}} />
                  </div>
                  <div className="col-lg-8 prof-name">
                    <p>廖婉君   Wan-jiun Liao</p>
                    <ul>
                      <li>Distinguished Professor, Department of Electrical Engineering,NTU</li>
                      <li>Professor, Graduate Institute of Communication Engineering, NTU</li>
                      <li>Professor, Graduate Institute of Networking and Multimedia, NTU</li>
                    </ul>
                  </div>
              </div>
              <div className="px-3 justify-content-center text-justify row">
                <div className="col-lg-12 mb-4">
                  <h2>Bio</h2>
                  <p>&emsp; Wanjiun Liao received the BS and MS degrees in Computer Science from National Chiao Tung University, Taiwan, in 1990 and 1992, respectively, and the Ph.D. degree in Electrical Engineering from the University of Southern California, Los Angeles, California, USA, in 1997. She is a Distinguished Professor of Electrical Engineering, National Taiwan University (NTU), Taipei, Taiwan. She is an Adjunct Research Fellow of Research Center for Information Techonology Innovation, Amercian Sinica, Taiwan. She is the General Director of Engineering Division in the Ministry of Science and Technology in Taiwan. Her research interests are focused on the design and analysis of wireless and multimedia networking, green communications, on-line social network analysis, and cloud networking.</p>
                  <p>&emsp;Prof. Liao was an Associate Editor of IEEE Transactions on Wireless Communications and IEEE Transactions on Multimedia, and served on the organizing committees of many international conferences. She was an IEEE Communications Society (ComSoc) Distinguished Lecturer, an IEEE Fellow Committee member, and the IEEE ComSoc Asia Pacific Board (APB) Director. She is on IEEE Award Board Award Review Committee and IEEE Transactions on Mobile Computing Steering Committe.</p>
                  <p>&emsp;Prof. Liao received many research awards and recognition from different government and professional organizations. She was a recipient of Outstanding Teaching Award at NTU (臺大教學傑出獎) in 2000, Outstanding EE Professor Award of Chinese IEE (中國電機工程師學會傑出電機工程教授獎) in 2006, Outstanding Research Award of National Science Council (NSC) (國科會研究傑出獎) in 2006, 2009, and 2012, K. T. Li Research Breakthrough Award (李國鼎穿石獎) in 2009, Outstanding Engineering Professor Award of Chinese Institute of Engineer (中國工程師學會傑出工程教授獎) in 2010, Teco Award (東元獎) in 2014, and Ministry of Education (MoE) Academic Award (教育部學術獎) in 2015. Dr. Liao was a recipient of the Republic of China (R.O.C.) Distinguished Women Medal (中華民國十大傑出女青年) in 2000, and received the Distinguished Alumni Award from National Chiao-Tung University (交大傑出校友) in 2012. She is a Fellow of the IEEE.</p>
                </div>                
                <div className="col-lg-12 mb-4">
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