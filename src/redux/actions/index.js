// import Axios from 'axios';
import { CREATE_USER_ACCOUNT, GET_USER_ACCOUNTS } from '../constants/index';
import {consume,consumeGet} from '../../API/consume';
import React from 'react';
import  { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

export const createUserAccount = (body) => async (dispatch) => {
  const res = await consume('/api/v2/auth/signin','post', body);
  console.log("=======result for backend=======");
  console.log(res);

  if (res) {
    dispatch({
      type: CREATE_USER_ACCOUNT,
      payload: res.data
    })
    return res;

  }
}

export const getUserAccounts = (token) => async (dispatch) => {
  const res = await consumeGet('/api/v2/accounts','get',token);
  console.log("=======result for backend for accounts=======");
  console.log(res);

  if (res) {
    dispatch({
      type: GET_USER_ACCOUNTS,
      payload: res.data
    })
  }
}
