import React, { useState, useEffect, useRef } from "react";
import Swiper from "swiper";
import "./Visual.css";
// import 'swiper/css/swiper.css';

const Visual = () => {
  const visual = useRef();
  useEffect(() => {
    console.log("component did mount");
    // console.log(visual.current)
  }, []);

  return (
    <section ref={visual} id="visual">
      <header>
        {/* <h1>Welcome to CSSLICK</h1>
        <p>Create Multimedia Contents With HTML, CSS and Javascript</p> */}
        <p class="top">Welcome to</p>
        <h1>CSSLICK</h1>
        <p class="bottom">Create Multimedia Contents with HTML, CSS and Javascript</p>
      </header>
    </section>
  );
};

export default Visual;
