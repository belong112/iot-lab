import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import ggggg from '../img/5g.png'
import VR from '../img/vr.png'
import BC from '../img/blockchain.png'
import iot from "../img/iot.png"

class About extends Component {
  render() {
    return (
      <div className="main-container">           
            <div className='index-container'>
              <div className="col-lg-12 text-justify yahei">
                <h1>關於我們</h1>
                <ol className="breadcrumb bg-transparent p-1">
                  <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                  <li className="breadcrumb-item active">關於我們</li>
                </ol>
                <hr/>
              </div>
              <div className="mx-3">
                <div className="mb-5 text-justify">
                  <div className="md-4">
                    <h4 className='yahei'>團隊介紹</h4>
                    <p>&emsp;&emsp;本實驗室指導教授為廖婉君教授，主要研究分為三個組別，分別為區塊鏈物聯網組，
                      VR/AR 組和 5G/6G 邊緣運算組。各組與外部企業及科技部皆有合作計畫，朝向尖端通訊發展。
                      本實驗室的研究重點是為當今互聯網中遇到的問題提供解決方案，並使得在未來的應用上更具有影響力。</p>
                  </div>
                  <div className="md-4">
                    <h4 className='yahei'>研究項目</h4>
                    <div className='d-flex row'>
                      <div className='col-lg-3 pb-3 text-center'>
                        <NavLink to='/research/ec'>
                          <div className='backgroundcircle m-auto'>
                            <img src={ggggg} alt='icon'/>
                          </div>
                          <div className='pt-3'>
                            <p className='yahei'>5G邊緣運算</p>
                            <div style={{fontSize:"0.9rem"}}>
                              <span>應用深度強化學習於邊緣運算之計算卸載</span>
                              <br/>
                              <span>行動邊緣運算的服務佈建</span>
                              <br/>
                            </div>
                          </div>
                        </NavLink>
                      </div> 
                      <div className='col-lg-3 pb-3 text-center'>
                        <NavLink to='/research/vr'>
                          <div className='backgroundcircle m-auto'>
                            <img src={VR} alt='icon'/>
                          </div>
                          <div className='pt-3'>
                            <p className='yahei'>虛擬實境和擴增實境</p>
                            <div style={{fontSize:"0.9rem"}}>
                              <span>B5G/6G前瞻技術研發</span>
                              <br/>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                      <div className='col-lg-3 pb-3 text-center'>
                        <NavLink to='/research/bc'>
                          <div className='backgroundcircle m-auto'>
                            <img src={BC} alt='icon'/>
                          </div>
                          <div className='pt-3'>
                            <p className='yahei'>區塊鏈</p>
                            <div style={{fontSize:"0.9rem"}}>
                              <span>醫療區塊鏈隱私保護和權限控管</span>
                              <br/>
                              <span>遊覽車區塊鏈共享賬本</span>
                              <br/>
                              <span>融合區塊鏈之 NB-IoT SIM/eSIM 資料來源安全設計</span>
                              <br/>
                              <span>基於區塊鏈的汽車共享和租賃平台</span>
                              <br/>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                     
                      <div className='col-lg-3 pb-3 text-center'>
                        <NavLink to='/research/bc'>
                          <div className='backgroundcircle m-auto'>
                            <img src={iot} alt='icon'/>
                          </div>
                          <div className='pt-3'>
                            <p className='yahei'>智慧物聯網</p>
                            <div style={{fontSize:"0.9rem"}}>
                              <span>智慧水務即時監控系統</span>
                              <br/>
                            </div>
                          </div>
                        </NavLink>
                      </div>                      
                    </div>
                  </div>                                    
                </div>
              </div>  
            </div>          
        </div>
    );
  }
}
export default About;