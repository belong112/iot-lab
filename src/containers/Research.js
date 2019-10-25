import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import pic1 from "../img/project_picture/image1.png"
import pic2 from "../img/project_picture/image2.png"
import pic3 from "../img/project_picture/image3.png"
import pic4 from "../img/project_picture/image4.png"
import pic5 from "../img/project_picture/image5.png"
import pic6 from "../img/project_picture/image6.png"
import pic7 from "../img/project_picture/image7.png"
import pic8 from "../img/project_picture/image8.png"

import ImageZoom from 'react-medium-image-zoom'


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
                        <hr />
                    </div>
                    <div className="mx-3">
                        <div className="mb-5 text-justify">
                            <div className="mb-5">
                                本實驗室主要研究的方向分為三個組別，分別為
                                <ul>
                                    <li><Link className='my_link' smooth to="/research#1">區塊鏈物聯網</Link></li>
                                    <li><Link className='my_link' smooth to="/research#2">VR/AR</Link></li>
                                    <li><Link className='my_link' smooth to="/research#3">5G/6G邊緣運算</Link></li>
                                </ul>
                            </div>


                            <div id="1" className="md-4">
                                <h4 className="yahei py-2" style={{backgroundColor:'#A5DCFF'}}>區塊鏈 / IoT</h4>
                                <p>本組別目前由2位博士生、4位碩士生和3位大學部學生組成。成員遍布台大電機系、台大資工系和台大物聯網中心。而目前的研究方向如下</p>
                                <ul>
                                    <li>車聯網區塊鏈</li>
                                    <li>醫療區塊鏈</li>
                                    <li>區塊鏈創新技術與應用</li>
                                    <li>區塊鏈數據安全和隱私保護、來源識別管理</li>
                                    <li>AI edge for blockchain</li>
                                </ul>
                                <p>相關的產學合作計畫如下</p>
                                <h5 className='yahei'>基於區塊鏈的汽車共享和租賃平台</h5>
                                <span></span>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic3, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}}  />
                                    <p className="font-italic">物聯網區塊鏈之感測資料來源安全管理</p>
                                </div>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic4, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                    <p className="font-italic">物聯網區塊鏈之感測資料來源安全管理</p>
                                </div>
                                    
                                <h5 className='yahei'>融合區塊鏈之 NB-IoT SIM/eSIM 資料來源安全設計</h5>
                                <p>GSM(Groupe Speciale Mobile Association) 為了因應IOT發展及改良原先SIM推出eSIM ，並推出Consumer及Machine to Machine兩種solution。
                                SIM 及eSIM 除了RAM、EEPROM擴充 功能上幾近相同，僅僅為由原先插入SIM卡更改為事先焊進手機裡。
                                ISIM 則更一步縮小為系統晶片的一部分 System of chip(SoC)。</p>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic5, alt: 'project_picture', className:'col-lg-7', style: { width: '100%' }}} />
                                    <p className="font-italic">物聯網區塊鏈之感測資料來源安全管理</p>
                                </div>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic6, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}}/>
                                    <p className="font-italic">融合區塊鏈之 NB-IoT SIM/eSIM 資料來源安全設計</p>
                                </div>
                         
                                <h5 className='yahei'>遊覽車區塊鏈共享賬本</h5>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic8, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                    <p className="font-italic">台灣遊覽車區塊鏈化解決方案之架構</p>
                                </div>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic1, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                    <p className="font-italic">數據收集、整理、上鏈和防篡改審查</p>
                                </div>
                          
                                <h5 className='yahei'>醫療區塊鏈隱私保護和權限控管</h5>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic2, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                    <p className="font-italic">應用於醫療區塊鏈之資料隱私保護與授權管理機制</p>
                                </div>
                                
                                <h5 className='yahei'>智慧水務即時監控系統</h5>
                                <p>採用NB-IoT無線通訊技術，具低佈建成本、低功耗、長傳輸距離、高通訊穿透力，可深入地下。同時設計智慧感測器聯防機制，降低整體能耗，
                                    延長系統壽命，減少系統維護成本。最後配合AI邊緣運算，提供水資源網路即時監控及預警之智慧服務。</p>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic7, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                    <p className="font-italic">應用於醫療區塊鏈之資料隱私保護與授權管理機制</p>
                                </div>
                                
                            </div>
                            <div id="2" className="md-4">
                                <h4 className="yahei py-2" style={{backgroundColor:"#A5DCFF"}}>VR / AR</h4>
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
                            <div id="3" className="md-4">
                                <h4 className="yahei py-2" style={{backgroundColor:"#A5DCFF"}}>5G 邊緣運算</h4>
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