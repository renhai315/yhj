import React, { Component } from 'react';
import { Route,Redirect } from "react-router-dom";
import HomeScreen from './Screen/HomeScreen';
import RegisterScreen from './Screen/RegisterScreen';

class App extends Component {
  render() {
    return (
      <div>
        <Route path={'/HomeScreen'} component={HomeScreen} />
        <Route path={'/RegisterScreen'} component={RegisterScreen} />
      </div>

    );
  }
}

export default App;
