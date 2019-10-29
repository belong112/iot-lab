import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import pic9 from '../img/project_picture/image9.png'
/*import { HashLink as Link } from 'react-router-hash-link';*/

import ImageZoom from 'react-medium-image-zoom'


class VRAR extends Component {
    render() {
        return (
            <div className="main-container">
                <div className='index-container'>
                    <div className="col-lg-12 text-justify yahei">
                        <h1>虛擬實境 (VR) / 擴增實境 (AR)</h1>
                        <ol className="breadcrumb bg-transparent p-1">
                            <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="/research">研究項目</NavLink></li>
                            <li className="breadcrumb-item active">VR 和 AR</li>
                        </ol>
                        <hr />
                    </div>
                    <div className="mx-3">
                        <div className="mb-5 text-justify">
                            <div id="2" className="md-4">
                                <p>目前的研究方向如下</p>
                                <ul>
                                    <li>
                                        <h5 className='yahei'>VR 串流於 5G 邊緣運算網路</h5>
                                        <span>IRL VR 團隊積極開發 VR 串流服務。</span> 
                                        <p>目前實作項目為 360° 影片串流播放器，客戶端軟體開發基於 Unity。系統將運作於以下架構：</p>
                                        <ul>    
                                            <li>客戶端：HTC Vive Focus HMD (OS: Android)</li>
                                            <li>伺服端：Ubuntu</li> 
                                        </ul>
                                        <p>系統實際運行於台大 5G 實驗場域：</p>
                                        <div className="text-center">
                                            <ImageZoom image={{src:pic9, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                            <p className="font-italic">系統架構示意圖</p>
                                        </div>
                                    </li>
                                    <li><h5 className='yahei'> VR/AR、5G 技術與醫療垂直整合</h5></li>
                                    <li>
                                        <h5 className='yahei'>基於社交網路優化多人 VR 串流</h5>
                                        <p>&emsp;&emsp;多人 VR 應用透過即時更新參與者們的狀態，實現高沈浸度的互動體驗。在無線傳輸延遲高的情況下，計算並更新大量的資訊將會因無線傳輸的高延遲而無法滿足使用者的高沈浸式體驗。</p>
                                          <p>&emsp;&emsp;透過社群網路的資訊，我們可以知道在 VR 環境中彼此的重要程度。
                                        因此在網路資源有限的情況下，對於一個使用者，邊緣伺服器 (Edge Server) 可以根據社群網路的資訊與 VR 環境優先選擇傳輸至重要性高的參與者們，降低資訊傳輸量與時間，以滿足使用者體驗。</p>
                                    </li>
                                    <li>
                                        <h5 className='yahei'>360° 影片的防暈眩與適應性串流</h5>
                                        <span>&emsp;&emsp;在無線頻寬的限制下，利用使用者行為預測、影片品質的變化與電腦視覺的技術處理讓使用者觀看360度影片時較不容易產生頭暈、想吐等不適症狀，同時維持良好的使用者體驗。</span>
                                    </li>                                    
                                </ul>
                                <br/>
                                <p>相關的合作計畫如下</p>
                                
                                <h5 className='yahei'>B5G的行動邊緣運算</h5>
                                <p>&emsp;&emsp;在擴增實境 (AR)/虛擬實境 (VR) 應用中，為了達到高沉浸式體驗，應用中的各類感測器(如眼球追蹤、手勢、體感等)感知及360° 3D 視訊畫面的內容需要透過高頻寬與低延遲的傳輸技術，
                                配合運算資源達成。由於目前的無線技術並不支援此特性，使得目前的 VR/AR 應用都是利用有線連結到後端的伺服器或是預先下載的方式來提供體驗。5G/B5G 網路即將到來，其超高頻寬、低延遲與高穩定度的特性將對
                                 VR/AR 帶來新的機會，5G/B5G的行動邊緣運算 (mobile edge computing, MEC) 將 VR/AR 應用所需的高運算資源及緩存能力移到近端實現，以降低網 路負擔及服務延遲。在此計畫中，我們將以智慧醫療應用為目標，
                                 開發支援行動 VR/AR 服務的核心技術，設計高效 AI 驅動的 B5G 無線網路資源管理方案，以支援多用戶、多視角、多內容的 VR/AR 智慧醫療服務系統。此計畫將分為五個子計畫，其中 IRL 負責之子計畫三開發支援
                                  AR/VR streaming 服務的行動邊緣運算、智慧學習與緩存技術，以降低延遲並有效使用網路頻寬。</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default VRAR;