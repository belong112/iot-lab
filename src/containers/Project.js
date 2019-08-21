import React, { Component } from 'react';
import $ from 'jquery'
import {Table} from "reactstrap"
import data from '../data/data.js'

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
    const trs =  data.r_paper.map(item =>{
      return(
        <tr>
          <td>{item.title}</td>
          <td>{item.author}</td>
          <td>{item.date}</td>
        </tr>
      )
    })
    return (
      <div className="main-container">
        <div className='index-container'>
          <div>
            <h1 className="txtjustify yahei">論文發布</h1>
            <hr/>
          </div>
            <div class="big-container tst row">
                <div className="col-lg-11">
                    <Table hover className="pubulication-table">
							        <thead>
							          <tr>
							            <th>Title</th>
							            <th>Author</th>
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