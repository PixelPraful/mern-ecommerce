import axios from 'axios';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_REQUEST,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from '../constants/orderConstants';

export const createOrder = (order) => {
  return (dispatch, getState) => {
    dispatch({ type: ORDER_CREATE_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    axios.post('/api/orders', order, config)
      .then(res => {
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: res.data });
      }).catch(err => {
        dispatch({ type: ORDER_CREATE_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message });
      });
  };
};

export const getOrderDetails = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    axios.get(`/api/orders/${id}`, config)
      .then(res => {
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: res.data });
      }).catch(err => {
        dispatch({ type: ORDER_DETAILS_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message });
      });
  };
};
