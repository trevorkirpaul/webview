import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from '../src/router';
import configStore from './redux/store';
import styled from 'styled-components';
import { initWrapperStyle } from './redux/actions/app';
const Wrapper = styled.div`
  max-width: 900px;
  margin: 10px auto;
`;
const store = configStore();
class App extends Component {
  componentDidMount() {
    document.addEventListener('message', e => {
      const { data } = e;
      const parsedData = JSON.parse(data);
      if (parsedData.fromWrapper) {
        store.dispatch(initWrapperStyle());
      }
    });
  }
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
