import * as Actions from './actions'; 
import {initialState} from '../store/initialState';

export const UsersReducer = (state = initialState.users, action)  => {
  // 第一引数は、stateがなければ、initialStateが代入される
  switch (action.type) {
    case Actions.SIGN_IN:
      return{
        ...state,  //現在のstateの中身を展開した上で
        ...action.payload //actions.jsファイルのpayloadの中身
      }
    case Actions.SIGN_OUT:
      return {
        ...action.payload
      };
    case Actions.FETCH_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
};