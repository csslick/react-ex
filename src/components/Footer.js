import React from 'react';
import './Footer.css';

export const Footer = ()=>{
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <footer className="container">
        <small>&copy; {year} CSSLICK MEDIA. all rights reserved.</small>
      </footer>
    </>
  )
}

