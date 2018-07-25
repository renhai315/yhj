import React, { Component } from 'react';
import { Route,Redirect } from "react-router-dom";
import HomeScreen from './Screen/HomeScreen';
import RegisterScreen from './Screen/RegisterScreen';
import LoginScreen from './Screen/LoginScreen';
import UpdateCustomer from './Screen/UpdateCustomer';

class App extends Component {
  render() {
    return (
      <div>
        <Route path={'/HomeScreen'} component={HomeScreen} />
        <Route path={'/RegisterScreen'} component={RegisterScreen} />
        <Route path={'/LoginScreen'} component={LoginScreen} />
        <Route path={'/UpdateCustomer'} component={UpdateCustomer} />
      </div>

    );
  }
}

export default App;
