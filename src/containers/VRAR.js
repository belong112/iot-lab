import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
/*import { HashLink as Link } from 'react-router-hash-link';*/

import ImageZoom from 'react-medium-image-zoom'


class VRAR extends Component {
    render() {
        return (
            <div className="main-container">
                <div className='index-container'>
                    <div className="col-lg-12 text-justify yahei">
                        <h1>研究項目</h1>
                        <ol className="breadcrumb bg-transparent p-1">
                            <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="/research">研究項目</NavLink></li>
                            <li className="breadcrumb-item active">VR / AR</li>
                        </ol>
                        <hr />
                    </div>
                    <div className="mx-3">
                        <div className="mb-5 text-justify">
                            <div id="2" className="md-4">
                                <h4 className="yahei py-2">VR / AR</h4>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default VRAR;