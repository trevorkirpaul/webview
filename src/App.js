import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from '../src/router';
import configStore from './redux/store';
import styled from 'styled-components';
const Wrapper = styled.div`
  max-width: 900px;
  margin: 10px auto;
`;
const store = configStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Wrapper>
            <Router />
          </Wrapper>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
