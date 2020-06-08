import React, {useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

const Visual = () => {
  useEffect(()=> {
    console.log('component did mount')
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
  })

  const style = {
    width: '100%',
    color: 'red'
  }

  return (
    <>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={style}>
            <img src="http://placeimg.com/1200/400/nature/a" />
          </div>
          <div className="swiper-slide" style={style}>
            <img src="http://placeimg.com/1200/400/nature/b" />
          </div>
          <div className="swiper-slide" style={style}>
            <img src="http://placeimg.com/1200/400/nature/c" />
          </div>
        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  )
}

export default Visual;