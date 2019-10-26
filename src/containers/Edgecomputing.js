import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
/*import { HashLink as Link } from 'react-router-hash-link';*/

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
export default Edgecomputing;