import { CREATE_USER_ACCOUNT, GET_USER_ACCOUNTS } from '../constants';

const initialState={
  user:{},
  accounts:[]
}

export default (state=initialState,action)=>{
  switch (action.type) {
    case CREATE_USER_ACCOUNT:
      return {
        ...state,
        user: action.payload
      }
    case GET_USER_ACCOUNTS:
      return {
        ...state,
        accounts:action.payload
      }
    default:
      return state;
  }
}

