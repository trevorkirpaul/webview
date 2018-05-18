import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/home';
import Header from '../containers/header/index';
import CreateUser from '../containers/createUser/CreateUser';
import SignIn from '../containers/signIn/SignIn';
import SignOut from '../containers/signOut/SignOut';
import InsurancePackage from '../containers/insurancePackages/InsurancePackages';
import InsuranceSelector from '../containers/insuranceSelector/InsuranceSelector';
import FindDoctors from '../containers/findDoctors/FindDoctors';
import DoctorSelector from '../containers/doctorSelector/DoctorSelector';
import Dashboard from '../containers/dashboard/Dashboard';
export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-user" component={CreateUser} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-out" component={SignOut} />
        <Route exact path="/insurance-package" component={InsurancePackage} />
        <Route exact path="/insurance-selector" component={InsuranceSelector} />
        <Route exact path="/find-doctors" component={FindDoctors} />
        <Route exact path="/doctor-selector" component={DoctorSelector} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
);
