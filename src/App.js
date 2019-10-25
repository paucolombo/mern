import React from 'react';
import { Header } from './components/header.js';
import Content  from './components/content.js';
import { Footer } from './components/footer.js';
//import Route from 'react-router-dom';
import './App.css';

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
