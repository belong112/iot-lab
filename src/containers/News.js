import React, { Component } from 'react';
import $ from 'jquery'
import { NavLink } from "react-router-dom"
import data from "../data/data.js"

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
        <div class="event-container">
          <h4>{item.date || "null"}</h4>
          <h1 className="newstitle"><NavLink to={`/page/${i}`}>{item.title || "Null"}</NavLink></h1>
          <p>{item.text|| "null"}</p>
          </div>
        )
    })
    return (
      <div className="main-container">          
          <div className='index-container'>
            <div className="yahei txtjustify">
              <h1>最新消息</h1>
              <hr/>
            </div>
            <div class="big-container tst row">
              <div className="index-container">
                {news}
              </div>                                            
            </div> 
          </div>           
      </div>
    );
  }
}
export default News;