import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import testpic from "../img/4.jpg"

class Research extends Component {
    render() {
        return (
            <div className="main-container">
                <div className='index-container'>
                    <div className="col-lg-12 text-justify yahei">
                        <h1>研究項目</h1>
                        <ol className="breadcrumb bg-transparent p-1">
                            <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                            <li className="breadcrumb-item active">關於我們</li>
                        </ol>
                        <hr />
                    </div>
                    <div className="mx-3">
                        <div className="mb-5 text-justify">
                            <div className="md-4">
                                <h2 className="yahei" style={{backgroundColor:"azure"}}>區塊鏈 / IoT</h2>
                                <p></p>
                                <p>目前的研究方向如下</p>
                                <ul>
                                    <li>車聯網區塊鏈</li>
                                    <li>醫療區塊鏈</li>
                                    <li>區塊鏈創新技術與應用</li>
                                    <li>區塊鏈數據安全和隱私保護、來源識別管理</li>
                                    <li>AI edge for blockchain</li>
                                </ul>
                                <p>相關的產學合作計畫如下</p>
                                <ul className="text-left">
                                    <li>
                                        <p>基於區塊鏈的汽車共享和租賃平台</p>
                                        <span></span>
                                        <img className="col-lg-6" src={testpic} width="100%"></img>
                                        <p className="text-center">數據收集整李</p>
                                    </li>
                                    <li>融合區塊鏈技術的 NB-IoT SIM/eSIM卡設計</li>
                                    <li>遊覽車區塊鏈共享賬本</li>
                                    <li>醫療區塊鏈隱私保護和權限控管</li>
                                    <li>基於區塊鏈技術的票據交換</li>
                                </ul>
                            </div>
                            <div className="md-4">
                                <h2>VR / AR</h2>
                                <p></p>
                                <p>目前的研究方向如下</p>
                                <ul>
                                    <li>VR串流於5G網路</li>
                                    <li>VR/AR、5G技術與醫療的垂直整合</li>
                                    <li>VR串流於社交網路之優化</li>
                                    <li>360°影片防暈眩之串流技術</li>                                    
                                </ul>
                                <p>相關的合作計畫如下</p>
                                <ul>
                                    <li>B5G/6G前瞻技術研發</li>
                                </ul>
                            </div>
                            <div className="md-4">
                                <h2>5G 邊緣運算</h2>
                                <p></p>
                                <p>目前的研究方向如下</p>
                                <ul>
                                    <li>應用深度強化學習於邊緣運算之計算卸載</li>
                                    <li>行動邊緣運算的服務佈建</li>                   
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