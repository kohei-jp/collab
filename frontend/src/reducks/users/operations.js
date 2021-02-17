import axios from 'axios';
import { GET_METHOD, promiseApi } from '../commons/index';
import {signInAction} from './actions';
import {push} from 'connected-react-router';
import { usersUrl } from '../../urls/index'

// modulesに書くロジックをこちら側に写す

export const signIn = () => {
  return async (dispatch, getState) => {
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
    }
  }
}

export const initial = () => {
  return (async dispatch => {
    const response = await promiseApi(usersUrl, GET_METHOD)
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