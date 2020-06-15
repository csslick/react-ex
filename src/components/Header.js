import React, {useState, useEffect, useRef} from 'react';

const Header = ({mode})=> {

  const header = useRef();

  useEffect(() => {
    console.log('header ', mode);
  });

  return (
    <div className={'App-header ' + mode}>
      <header ref={header} className='container'>
        <div className="row">
          <h1 className="col-6">
            <a href="./">CSSLICK</a>
          </h1>
          <nav id="gnb" className="col-6">
            <ul>
              <li><a href="./">home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">works</a></li>
              <li><a href="https://cafe.naver.com/csslick" target="_blank">community</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header;