import React, { Component } from 'react';
import $ from 'jquery'
import { NavLink } from "react-router-dom"
import data from "../data/data.js"
import testimg from "../img/4.jpg"

class News extends Component {
  componentDidMount(){
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(window).scrollTop() > 10) { 
          $('.back-to-top').css('opacity','.5');
      } else {
          $('.back-to-top').css('opacity','0');
      }
    });
  }

  render() {
    const news = data.posts.map((item,i)=>{
      return(
        <div className="mb-3 pb-2 d-table border-bottom border-secondary">
          <div className="leftpart">
            <img src={item.image || testimg} />
          </div>
          <div className="rightpart">
            <h4>{item.date || "null"}</h4>
            <h3 className="newstitle"><NavLink to={`/news/${i}`}>{item.title || "Null"}</NavLink></h3>
            <p>{item.text|| "null"}</p>
          </div>
          <div className='clear'></div>
        </div>
        )
    })
    return (
      <div className="main-container">          
          <div className='index-container'>
            <div className="yahei text-justify">
              <h1>最新消息</h1>
              <ol className="breadcrumb bg-transparent p-1">
                <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
                <li className="breadcrumb-item active">最新消息</li>
              </ol>
              <hr/>
            </div>
            <div class="mb-5 text-justify row">
              <div className="px-5">
                {news}
              </div>                                            
            </div> 
          </div>           
      </div>
    );
  }
}
export default News;