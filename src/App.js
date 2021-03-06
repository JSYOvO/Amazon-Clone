import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import Checkout from './Components/Checkout/Checkout.js';
import Login from './Components/Login/Login.js';
import Payment from './Components/Payment/Payment.js';
import Orders from './Components/Orders/Orders.js';
import './App.css';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider.js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const tag = 'App';
const promise = loadStripe('pk_test_51HYOvdBtDiPEwFpk2iOfwFDEfQulNDRPbFeMXeoFIwYZ9oSXezv03mPZxI57vRgJzibsdrg7cSlhzPBGKLg3bWSN0095zV3Ka1');
function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    
    console.log(tag,"useEffect", auth);

    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type : "SET_USER",
          user : authUser
        })
      }
      else{
        dispatch({
          type : "SET_USER",
          user : null
        })
      }
    })
  }, [user])

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Checkout Login */}
          <Route path="/login">    
            <Login/>
          </Route>
          {/* Checkout Route */}
          <Route path="/checkout">    
            <Header/>
            <Checkout/>
          </Route>
          {/* Checkout Payment */}
          <Route path="/payment">    
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          {/* Checkout Orders */}
          <Route path="/orders">   
            <Header/> 
            <Orders/>
          </Route>
          {/* Home page Route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
