import React from 'react';
import logo from './logo.svg';
import './App.css';
import PixelCanvas from './components/PixelCanvas';
import Header from './components/Header';

function App() {
  return (
    <div className="cp-app">
      <Header/>
      <div className="cp-main">
        <article>
          <div className="cp-div-canvas">
            <PixelCanvas/>
          </div>
        </article>
      </div>
      <footer/>
    </div>
  );
}

export default App;