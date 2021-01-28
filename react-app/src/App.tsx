import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Moniter from './components/Moniter';


 const App=()=> {

  return (
    <div className="App container-fluid">
      <Header />
      <Moniter />
      <Footer name="Torjin Sama"/>
    </div>
  );
}

export default App;
