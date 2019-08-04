import React, { Component } from 'react';
import $ from 'jquery'
import {Table} from "reactstrap"

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
							          <tr>
							            <td>How Time Matters: Learning Time-Decay Attention for Contextual Spoken Language Understanding in Dialogues</td>
							            <td>Chiu chi chen</td>
							            <td>2019.1</td>
							          </tr>
							          <tr>
							            <td>Jacob</td>
							            <td>Thornton</td>
							            <td>@fat</td>
							          </tr>
							          <tr>
							            <td>Larry</td>
							            <td>the Bird</td>
							            <td>@twitter</td>
							          </tr>
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