import React, { Component } from "react";
import Slider from "react-slick";
// import logo from './../public/abc.jpg';
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <Slider {...settings}>
         
          <figure>
               <img src="./abc.jpg" className="banner-image" alt="logo" />
               <div className="banner-text">
               <p className="tag">Best Store</p>
                 <h1>Hello <br /><span>And Welcome 2022</span></h1>
                 <button className="book-now">Book Now</button>
               </div>
            </figure>
      
         
        
        </Slider>
      </div>
    );
  }
}