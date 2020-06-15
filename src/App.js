import React, { useRef, useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Visual from './components/Visual';
import {Footer} from './components/Footer';
import Work_list from './components/Work_list';
import BookInfo from './components/BookInfo';
import About from './components/About';

function App() {
  const app_wrap = useRef();
  const [scrollY, setScrollY] = useState(0);
  const [headerMode, setHeaderMode] = useState(true);
  const handleScroll = (e)=> {
    setScrollY(app_wrap.current.scrollTop);
    console.log(app_wrap.current, scrollY);
  }
  useEffect(()=> {
    console.log('App component did mount')
    setHeaderMode((scrollY > 80) ? 'fixed' : 'static');
    console.log(headerMode)
  }, [scrollY])

  return (
    <div 
      ref={app_wrap}
      style={{overflowY: 'scroll'}}
      onScroll={handleScroll} 
      className="App"
    >
      <Header mode={headerMode}/>
      <Visual/>
      {/* 저서소개 */}
      <BookInfo/>
      <Work_list/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
