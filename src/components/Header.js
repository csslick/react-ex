import React from 'react';

const Header = ()=> {

  return (
    <>
      <header className="App-header container">
        <div className="row">
          <h1 className="col-6">
            <a href="./">CSSLICK</a>
          </h1>
          <nav id="gnb" className="col-6">
            <ul>
              <li><a href="./">home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">works</a></li>
              <li><a href="#">community</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;