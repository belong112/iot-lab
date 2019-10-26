import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

class Research extends Component {
    render() {
        return (
            <div className="main-container">
                <div className='index-container'>
                    <div className="col-lg-12 text-justify yahei">
                        <ol className="breadcrumb bg-transparent p-1">
                            <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                            <li className="breadcrumb-item active">研究項目</li>
                        </ol>
                        <h1>研究項目</h1>
                        <hr />
                    </div>
                    <div className="mx-3">
                        <div className="mb-5 text-justify">
                            <div className="mb-5">
                                本實驗室主要研究的方向分為三個組別，分別為
                                <ul>
                                    <li className='my_link'><NavLink to="/research/bc"><span>區塊鏈/物聯網</span></NavLink></li>
                                    <li className="my_link"><NavLink to="/research/vr"><span>VR/AR</span></NavLink></li>
                                    <li className='my_link'><NavLink to="/research/ec"><span>5G邊緣運算</span></NavLink></li>
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