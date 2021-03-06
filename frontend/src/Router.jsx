import React from 'react';
import {Switch, Route} from 'react-router';
import Auth from './Auth';

// components
import {Login, Home, SignUp} from './templates'
const Router = () =>  {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/signup"} component={SignUp} />

      <Auth>
        <Route exact path={"(/)?"} component={Home} />
      </Auth>
    </Switch>
  )
}
export default Router