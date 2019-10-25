import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

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
                    <p>本實驗室指導教授為廖婉君教授，主要研究的方向分為三個組別，分別為區塊鏈物聯網組，VR/AR組和5G/6G邊緣運算組。本實驗室與外部企業及科技部皆有合作計畫，朝向尖端通訊發展。</p>
                  </div>
                  <div className="md-4">
                    <h4 className='yahei'>研究方向</h4>
                    <p>目前的研究方向如下</p>
                    <ul>
                      <li>車聯網區塊鏈</li>
                      <li>醫療區塊鏈</li>
                      <li>區塊鏈創新技術與應用</li>
                      <li>區塊鏈數據安全和隱私保護、來源識別管理</li>
                      <li>AI edge for blockchain</li>
                      <li>5G/6G AI Edge </li>
                      <li>B5G AR/VR 智慧醫療: 邊緣運算垂直整合應用</li>
                    </ul>
                    <p>另有以下產學合作計畫</p>
                    <ul>
                      <li>基於區塊鏈的汽車共享和租賃平台</li>
                      <li>融合區塊鏈技術的 NB-IoT SIM/eSIM卡設計</li>
                      <li>遊覽車區塊鏈共享賬本</li>
                      <li>醫療區塊鏈隱私保護和權限控管</li>
                      <li>基於區塊鏈技術的票據交換</li>
                      <li>智慧水務即時監控系統</li>
                    </ul>
                  </div>                  
                </div>
              </div>  
            </div>          
        </div>
    );
  }
}
export default About;