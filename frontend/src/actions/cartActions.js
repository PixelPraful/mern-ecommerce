import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

export const addToCart = (id, qty) => {
  return (dispatch, getState) => {
    axios.get(`/api/products/${id}`)
      .then(res => {
        const data = res.data;
        dispatch({
          type: CART_ADD_ITEM,
          payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
          }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
      });
  };
};

export const removeFromCart = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
};

export const saveShippingAddress = (data) => {
  return dispatch => {
    dispatch({
      type: SAVE_SHIPPING_ADDRESS,
      payload: data,
    });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };
};