import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

class Research extends Component {
  render() {
    return (
      <div className="main-container">           
            <div className='index-container'>
              <div className="col-lg-12 text-justify yahei">
                <h1>研究項目</h1>
                <ol className="breadcrumb bg-transparent p-1">
                  <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                  <li className="breadcrumb-item active">研究項目</li>
                </ol>
                <hr/>
              </div>
              <div className="mx-3">
                <div className="mb-5 text-justify">
                  <div className="md-4">
                    <h2>研究方向</h2>
                    <ul>
                      <li>車聯網區塊鏈</li>
                      <li>醫療區塊鏈</li>
                      <li>區塊鏈創新技術與應用</li>
                      <li>區塊鏈數據安全和隱私保護、來源識別管理</li>
                      <li>AI edge for blockchain</li>
                    </ul>
                    <h2>產學合作計畫</h2>
                    <ul>
                      <li>基於區塊鏈的汽車共享和租賃平台</li>
                      <li>融合區塊鏈技術的 NB-IoT SIM/eSIM卡設計</li>
                      <li>遊覽車區塊鏈共享賬本</li>
                      <li>醫療區塊鏈隱私保護和權限控管</li>
                      <li>基於區塊鏈技術的票據交換</li>
                    </ul>
                  </div>                  
                </div>
              </div>  
            </div>          
        </div>
    );
  }
}
export default Research;