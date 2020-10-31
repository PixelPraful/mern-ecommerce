import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
} from '../constants/userConstants';

export const register = (name, email, password) => {
  return dispatch => {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios.post('/api/users', { name, email, password }, config)
      .then(res => {
        dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
        localStorage.setItem('userInfo', JSON.stringify(res.data));
      }).catch(err => {
        dispatch({ type: USER_REGISTER_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message });
      });
  };
};

export const login = (email, password) => {
  return dispatch => {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios.post('/api/users/login', { email, password }, config)
      .then(res => {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
        localStorage.setItem('userInfo', JSON.stringify(res.data));
      }).catch(err => {
        dispatch({ type: USER_LOGIN_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message });
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
  };
};

export const getUserDetails  = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    axios.get(`/api/users/${id}`, config)
      .then(res => {
        dispatch({ type: USER_DETAILS_SUCCESS, payload: res.data });
      }).catch(err => {
        dispatch({ type: USER_DETAILS_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message });
      });
  };
};

export const updateUserProfile  = (user) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    axios.put('/api/users/profile', user, config)
      .then(res => {
        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: res.data });
      }).catch(err => {
        dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message });
      });
  };
};