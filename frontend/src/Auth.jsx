import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsSignIn } from './reducks/users/selectors';
import { useEffect } from 'react';
import { listenAuthState, initial } from './reducks/users/operations';

const Auth = ({children}) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignIn(selector);

  useEffect( () => {
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  }, [dispatch, isSignedIn]);

  if (!isSignedIn){
    return <></>
  } else {
    return children;
  }
}

export default Auth;