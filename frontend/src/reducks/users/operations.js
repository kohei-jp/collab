import axios from 'axios';
import {signInAction} from './actions';
import {push} from 'connected-react-router';
import { usersUrl } from '../../urls/index'

// modulesに書くロジックをこちら側に写す

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const isSignedIn = state.users.isSingedIn

    if (!isSignedIn) {
      const url = usersUrl
      const response = await axios.get(url)
                      .then(res => {
                        return res.data
                      })
                      .catch(() => null)
      const uid = response.user.id
      const username = response.user.user_name
      const email = response.user.email
      dispatch(signInAction({
        isSignedIn: true,
        uid: uid,
        username: username,
        email: email,
      }))
      dispatch(push('/'))
    }
  }
}