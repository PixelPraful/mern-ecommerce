import { CART_ADD_ITEM, CART_REMOVE_ITEM, SAVE_SHIPPING_ADDRESS } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
  switch(action.type) {
  case CART_ADD_ITEM:
    // eslint-disable-next-line no-case-declarations
    const item = action.payload;
    // eslint-disable-next-line no-case-declarations
    const existItem = state.cartItems.find(x => x.product === item.product);
    if (existItem) {
      return {
        ...state,
        cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x),
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
    }
  case CART_REMOVE_ITEM:
    return {
      ...state,
      cartItems: state.cartItems.filter(x => x.product !== action.payload),
    };

  case SAVE_SHIPPING_ADDRESS:
    return {
      ...state,
      shippingAddress: action.payload,
    };
  default:
    return state;
  }
};