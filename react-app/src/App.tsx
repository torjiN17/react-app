import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './containers/Home'
import { Route } from 'react-router-dom';
import About from './containers/About';


 const App=()=> {

  return (
    <div className="App">
      <Route exact path="/" component={Home} title={Home.title}/>
      <Route path="/About" component={About} />
    </div>
  );
}

export default App;
