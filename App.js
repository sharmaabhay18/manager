import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import RouterComponent from './src/Router';

 export default class App extends Component {

componentWillMount() {
   const firebase = require('firebase');
   
  const config = {
  apiKey: 'AIzaSyB_DRPyFdMsUWftwDUdtpjFz8_1gt1AZes',
  authDomain: 'manager-c3d  6e.firebaseapp.com',
  databaseURL: 'https://manager-c3d6e.firebaseio.com',
  projectId: 'manager-c3d6e',
  storageBucket: 'manager-c3d6e.appspot.com',
  messagingSenderId: '236833720569'
};
firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}
