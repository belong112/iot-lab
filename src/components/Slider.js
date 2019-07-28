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
            <span>Slide 1</span>
          
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    )
  }
}
export default Sliders;