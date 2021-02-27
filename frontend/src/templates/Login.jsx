import React from "react";
import { useDispatch } from 'react-redux';
import {listenAuthState} from '../reducks/users/operations';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(listenAuthState())}>
        ログインする
      </button>
    </div>

  );
}
export default Login;