import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">ApnaBazaar</a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">SignIn</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
         </main>
        <footer className="row center">
          All right reserved
        </footer>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
