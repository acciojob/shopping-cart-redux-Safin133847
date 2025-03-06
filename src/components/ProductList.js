import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../redux/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 }
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <button onClick={() => dispatch(addToWishlist(product))}>Wishlist</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
