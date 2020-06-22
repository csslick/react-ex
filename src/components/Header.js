import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = ({ mode }) => {
  const header = useRef();
  const [toggle, setToggle] = useState("");

  useEffect(() => {
    const menus = document.querySelectorAll('#gnb a');
    menus.forEach((menu)=> {
      menu.addEventListener('click', function(){
        handleToggle();
        console.log(this.hash);
      });
    })
  });

  const handleToggle = () => {
    toggle === "" ? setToggle("show") : setToggle("");
  };

  return (
    <div className={"App-header " + mode} id="main_header">
      <header ref={header} className="container">
        <div className="row">
          <h1 className="col-2">
            <a href="./">CSSLICK</a>
          </h1>
          <nav id="gnb" className={"col-10 " + toggle}>
            <ul>
              <li>
                <a href="./">home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#work_list">works</a>
              </li>
              <li>
                <a href="https://cafe.naver.com/csslick" target="_blank">
                  community
                </a>
              </li>
              <li>
                <a href="#main_footer">contact</a>
              </li>
            </ul>
          </nav>
          <button id="toggle" onClick={handleToggle}>
            <i className="fa fa-bars fa-3x" aria-hidden="true"></i>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
