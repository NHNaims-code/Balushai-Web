import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

export default function TopSlider(){


    const PrevArrowButton = (props) => {
      console.log(props)
      const {className, onClick} = props
      return(<div 
        className={className} 
        onClick={onClick}>
          <i class={`fa-light fa-chevron-right text-white`}></i>
        </div>)
    }
    const NextArrowButton = (props) => {
      const {className, onClick} = props
      return(<div className={className} onClick={onClick} style={{color: 'white'}}>Next</div>)
    }

    const settings = {
      dots: true,
      lazyLoad: true,
      autoplay: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:<PrevArrowButton/>,
      nextArrow:<NextArrowButton/>,
      customPaging: (index) => {
        return <div></div>
      },
      dotsClass: 'slick-dots custom-indicator'
    };

    return (
      <div className="w-full">
        <Slider {...settings}>
          <div>
            <img 
              src='/home-slider-images/slide1.webp' 
              width='100%'
            />
          </div>
          <div>
            <img 
              src='/home-slider-images/slide2.webp' 
              width='100%'
            />
          </div>
          <div>
            <img 
              src='/home-slider-images/slide3.webp' 
              width='100%'
            />
          </div>
          <div>
            <img 
              src='/home-slider-images/slide4.webp' 
              width='100%'
            />
          </div>
          
        </Slider>
      </div>
    );
}