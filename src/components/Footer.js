import React from 'react';
import './Footer.css';

export const Footer = ()=>{
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <footer className="container" id="main_footer">
        <ul className="sns">
          <li><a href="https://cafe.naver.com/csslick"><img style={{marginTop:'2px'}} width="28px" src="./images/naver_cafe.png" title="naver cafe" alt="naver cafe"/></a></li>
          <li><a href="https://github.com/csslick"><i className="fa fa-github-square" aria-hidden="true"></i></a></li>
          <li><a href="mailto:tailofmoon@naver.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
          <li><a href="tel:010-6340-2948"><i className="fa fa-phone-square" aria-hidden="true"></i></a></li>
        </ul>
        <a href="#visual" className="btn_top">top</a>
        <small>&copy; {year} CSSLICK MEDIA. all rights reserved.</small>
      </footer>
    </>
  )
}

