import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/actions';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.map(item => (
        <div key={item.id}>
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
