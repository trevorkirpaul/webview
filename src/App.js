import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../src/components/Header';
import Home from '../src/components/Home';
import SignIn from '../src/components/SignIn';
import SignOut from '../src/components/SignOut';
import SelectPlan from '../src/components/SelectPlan';
import CreateAccount from '../src/components/CreateAccount';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/createaccount" component={CreateAccount} />
            <Route exact path="/selectplan" component={SelectPlan} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signout" component={SignOut} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
