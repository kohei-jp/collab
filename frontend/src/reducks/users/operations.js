import axios from 'axios';
import { GET_METHOD, promiseApi } from '../commons/index';
import {signInAction} from './actions';
import {push} from 'connected-react-router';
import { usersUrl } from '../../urls/index'

// modulesに書くロジックをこちら側に写す

export const listenAuthState = () => {
  return async (dispatch, getState) => {
    // initial.jsonをdispatchして、
    dispatch(initial());
    console.log("第一");
    const state = getState()
    const isSignedIn = state.users && state.users.isSingedIn
    
    if (!isSignedIn) {
      const url = usersUrl
      const response = await axios.get(url)
                      .then(res => {
                        return res.data
                      })
                      .catch(() => null)
      const id = response.user.id
      const user_name = response.user.user_name
      const email = response.user.email
      dispatch(signInAction({
        isSignedIn: true,
        id: id,
        user_name: user_name,
        email: email,
      }))
      dispatch(push('/'))
    } else {
      dispatch(push('/login'))
    }
  }
}

export const initial = () => {
  return (async dispatch => {
    console.log("intial");
    // users_controllerのindexアクションに投げている.
    // top_controllerに変更. paramsでsession飛ばす? なくても、コントローラで取得可能?
    // login?で確認して、session[:user_id]より、userをfindしてその情報を返したい.
    const response = await promiseApi(usersUrl, GET_METHOD)
    console.log(response);
    const id = response.data.user.id
    const user_name = response.data.user.user_name
    const email = response.data.user.email
    dispatch(signInAction({
      isSignedIn: true,
      id: id,
      user_name: user_name,
      email: email,
    }))
  }
)}