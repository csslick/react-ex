import React from 'react';
import './App.css';
import Header from './components/Header';
import Visual from './components/Visual';
import {Footer} from './components/Footer';
import Work_list from './components/Work_list';
import BookInfo from './components/BookInfo';
import About from './components/About';

function App() {

  return (
    <div className="App">
      <Header/>
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
