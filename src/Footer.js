import React from 'react';

export const Footer = ()=>{
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <footer>
  <small>&copy; {year} CSSLICK MEDIA. all rights reserved.</small>
      </footer>
    </>
  )
}

