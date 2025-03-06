
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ProductList from './ProductList';
import Cart from './Cart';
import Wishlist from './Wishlist';
import './../styles/App.css';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Shopping Cart App</h1>
      <ProductList />
      <Cart />
      <Wishlist />
    </div>
  </Provider>
);

export default App;