import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
       <Header />
       <Content />
       <Footer />
    </div>
  );
}

export default App;