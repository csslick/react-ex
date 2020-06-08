import React from 'react';
import './App.css';
import Header from './Header';
import Visual from './Visual';
import {Footer} from './Footer';
import Work_list from './Work_list';

function App() {

  return (
    <div className="App">
      <Header/>
      <Visual/>
      {/* 저서소개 */}
      <Work_list/>
      <Footer/>
    </div>
  );
}

export default App;
