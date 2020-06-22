import React from 'react';
import './Footer.css';

export const Footer = ()=>{
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <footer className="container" id="main_footer">
        <a href="#visual" className="btn_top">top</a>
        <small>&copy; {year} CSSLICK MEDIA. all rights reserved.</small>
      </footer>
    </>
  )
}

