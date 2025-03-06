import {
    ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY,
    ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, APPLY_COUPON
  } from './actions';
  
  const initialState = { cart: [], wishlist: [], discount: 0 };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      case REMOVE_FROM_CART:
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
      case INCREASE_QUANTITY:
        return {
          ...state,
          cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
        };
      case DECREASE_QUANTITY:
        return {
          ...state,
          cart: state.cart.map(item => item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
        };
      case ADD_TO_WISHLIST:
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      case REMOVE_FROM_WISHLIST:
        return { ...state, wishlist: state.wishlist.filter(item => item.id !== action.payload) };
      case APPLY_COUPON:
        return { ...state, discount: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  