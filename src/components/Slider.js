import React,{ Component } from 'react';
import { Slide } from 'react-slideshow-image';
import bgimg1 from "../img/4.jpg" 
import bgimg2 from "../img/5.jpg"
import bgimg3 from "../img/6.jpg"
import "../css/slider.css"

const slideImages = [
  bgimg1,
  bgimg2,
  bgimg3
];

const properties = {
  duration: 7000,
  transitionDuration: 600,
  infinite: true,
  indicators: false,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
class Sliders extends Component {
  render() {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>賀! 我大中華民國奧運勇奪三金二銀</span>
          
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>慟! 我大中華民國香港特別淪陷區元朗事件</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>賀! 我大中華民國中國特別淪陷區重返自由</span>
          </div>
        </div>
      </Slide>
    )
  }
}
export default Sliders;