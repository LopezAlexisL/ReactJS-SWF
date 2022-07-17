import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/Utils/CartContext';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer';
import CartCheckout from './components/CartCheckout/CartCheckout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:side' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<ItemCartContainer/>} />
              <Route path='/cartcheckout' element={<CartCheckout/>} />

            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
    );
  }
}

export default App;
