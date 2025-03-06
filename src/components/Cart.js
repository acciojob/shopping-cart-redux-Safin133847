import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart, applyCoupon } from '../redux/actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const discount = useSelector(state => state.discount);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * ((100 - discount) / 100);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name} - ${item.price} x {item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={() => dispatch(applyCoupon(10))}>Apply 10% Coupon</button>
    </div>
  );
};

export default Cart;
