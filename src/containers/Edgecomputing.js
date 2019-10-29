import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
/*import { HashLink as Link } from 'react-router-hash-link';*/
import pic10 from '../img/project_picture/image10.png'

import ImageZoom from 'react-medium-image-zoom'


class Edgecomputing extends Component {
    render() {
        return (
            <div className="main-container">
                <div className='index-container'>
                    <div className="col-lg-12 text-justify yahei">
                        <h1>5G 邊緣運算</h1>
                        <ol className="breadcrumb bg-transparent p-1">
                            <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="/research">研究項目</NavLink></li>
                            <li className="breadcrumb-item active">5G 邊緣運算</li>
                        </ol>
                        <hr />
                    </div>
                    <div className="mx-3">
                        <div className="mb-5 text-justify">
                            <div className="md-4">
                                <p>目前的研究方向如下</p>
                                <ul>
                                    <li>
                                        <h5 className='yahei'>深度強化學習於行動邊緣運算之分流與資源分配</h5> 
                                        <p>&emsp;&emsp;多用戶環境下，利用深度強化學習共同解決頻寬分配和運算伺服器計算資源分配的問題。滿足用戶需求前提下，最佳化長期的效能如延遲、能耗等。</p>
                                    </li>    
                                    <li>
                                        <h5 className='yahei'>行動邊緣運算的服務佈建</h5>
                                        <p>&emsp;&emsp;行動邊緣運算使得服務供應商可以將應用布建於網路邊緣來滿足使用者超低延遲需求，然而邊緣伺服器的運算、儲存資源不及雲端伺服器，
                                            因此如何根據每種服務的特性、使用者的需求與邊緣伺服器的資源來進行應用服務的布建將是一個重要的研究議題。由於使用者需求會動態地變化，
                                            在此研究中，透過深度強化學習的方式來學習一套服務布建的機制，動態地調整不同狀態下的決策，以有效地運用邊緣伺服器的資源來滿足使用者的需求。</p>
                                        <div className="text-center">
                                            <ImageZoom image={{src:pic10, alt: 'project_picture', className:'col-lg-7', style: { width: '100%' }}} />
                                            <p className="font-italic"></p>
                                        </div>
                                    </li>
                                </ul>                                                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Edgecomputing;