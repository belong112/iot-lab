import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import $ from 'jquery'
import {Table} from "reactstrap"
import data from '../data/data.js'
import pdata from  "../data/result.js"

class Project extends Component {
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
    const trs =  pdata.map(item =>{
      return(
        <tr>
          <td>{item.title}</td>
          <td>{item.date}</td>
        </tr>
      )
    })
    return (
      <div className="main-container">
        <div className='index-container'>
          <div className='text-justify yahei col-lg-12'>
            <h1>論文發布</h1>
            <ol className="breadcrumb bg-transparent p-1">
              <li className="breadcrumb-item"><NavLink to="/">首頁</NavLink></li>
              <li className="breadcrumb-item active">論文發布</li>
            </ol>
            <hr/>
          </div>
            <div class="mb-5 justify-content-center row">
                <div className="text-justify col-lg-11">
                    <Table hover className="pubulication-table">
							        <thead>
							          <tr>
							            <th>Conference & proceeding papers</th>
							            <th>Date</th>
							          </tr>
							        </thead>
							        <tbody>
							          {trs}
							        </tbody>
							      </Table>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Project;