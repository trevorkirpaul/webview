import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from '../src/router';
import configStore from './redux/store';

const store = configStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
