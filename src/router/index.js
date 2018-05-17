import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/home';
import Header from '../containers/header/index';
import CreateUser from '../containers/createUser/CreateUser';
import SignIn from '../containers/signIn/SignIn';
import SignOut from '../containers/signOut/SignOut';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-user" component={CreateUser} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-out" component={SignOut} />
      </Switch>
    </div>
  </BrowserRouter>
);
