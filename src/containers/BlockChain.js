import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
/*import { HashLink as Link } from 'react-router-hash-link';*/
import pic1 from "../img/project_picture/image1.png"
import pic2 from "../img/project_picture/image2.png"
import pic3 from "../img/project_picture/image3.png"
import pic4 from "../img/project_picture/image4.png"
import pic5 from "../img/project_picture/image5.png"
import pic6 from "../img/project_picture/image6.png"
import pic7 from "../img/project_picture/image7.png"
import pic8 from "../img/project_picture/image8.png"

import ImageZoom from 'react-medium-image-zoom'


class BlockChain extends Component {
    render() {
        return (
            <div className="main-container">
                <div className='index-container'>
                    <div className="col-lg-12 text-justify yahei">
                        <h1>區塊鏈 / 物聯網 (IoT)</h1>
                        <ol className="breadcrumb bg-transparent p-1">
                            <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="/research">研究項目</NavLink></li>
                            <li className="breadcrumb-item active">區塊鏈和物聯網</li>
                        </ol>
                        <hr />
                    </div>
                    <div className="mx-3">
                        <div className="mb-5 text-justify">
                            <div id="1" className="md-4">
                                <p>本組別目前由2位博士生、4位碩士生和3位大學部學生組成。成員遍布台大電機系、台大資工系和台大物聯網中心。而目前的研究方向如下</p>
                                <ul className='yahei'>
                                    <li>車聯網區塊鏈</li>
                                    <li>醫療區塊鏈</li>
                                    <li>區塊鏈創新技術與應用</li>
                                    <li>區塊鏈數據安全和隱私保護、來源識別管理</li>
                                    <li>AI edge for blockchain</li>
                                </ul>
                                <p>相關的產學合作計畫如下</p>
                                <br/>
                                <h5 className='yahei'>基於區塊鏈的汽車共享和租賃平台</h5>
                                <span>此計畫和Daimler Mercedes Benz合作，藉由區塊鏈讓現今火紅的共享經濟實現於汽車租賃上。</span>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic3, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}}  />
                                    <p className="font-italic">汽車租賃系統架構示意圖</p>
                                </div>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic4, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                    <p className="font-italic">藉由區塊鏈不可竄改的特性來確保所有資料都是可信任的</p>
                                </div>
                                <br/><br/>
                                    
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
                                <br/><br/>
                         
                                <h5 className='yahei'>遊覽車區塊鏈共享賬本</h5>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic8, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                    <p className="font-italic">台灣遊覽車區塊鏈化解決方案之架構</p>
                                </div>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic1, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                    <p className="font-italic">數據收集、整理、上鏈和防篡改審查</p>
                                </div>
                                <br/><br/>
                          
                                <h5 className='yahei'>醫療區塊鏈隱私保護和權限控管</h5>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic2, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                    <p className="font-italic">應用於醫療區塊鏈之資料隱私保護與授權管理機制</p>
                                </div>
                                <br/><br/>
                                
                                <h5 className='yahei'>智慧水務即時監控系統</h5>
                                <p>系統採用NB-IoT無線通訊技術，具低佈建成本、低功耗、長傳輸距離、高通訊穿透力，可深入地下。同時設計智慧感測器聯防機制，降低整體能耗，
                                    延長系統壽命，減少系統維護成本。最後配合AI邊緣運算，提供水資源網路即時監控及預警之智慧服務。</p>
                                <div className="text-center">
                                    <ImageZoom image={{src:pic7, alt: 'project_picture', className:'col-lg-7',style: { width: '100%' }}} />
                                    <p className="font-italic">智慧水務監控及警示系統</p>
                                </div>                                
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BlockChain;