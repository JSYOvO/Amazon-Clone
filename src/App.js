import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header/Header.js'
import Home from './Components/Home/Home.js'
import Checkout from './Components/Checkout/Checkout.js'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          {/* Checkout Route */}
          <Route path="/checkout">    
            <Checkout/>
          </Route>
          {/* Home page Route */}
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
