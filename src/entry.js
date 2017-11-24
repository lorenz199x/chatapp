import React, { Component } from 'react';
import {Platform, View, Text} from 'react-native';
import { Provider } from 'react-redux';
import store from  './redux/store';
import firebase from 'firebase';
import Router from './redux/Router';

export default class Entry extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

// <Router>
//   <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
//     <Scene key='home' title='Home' component={Home}/>
//     <Scene key='chat' title='Chat' component={Chat}/>
//   </Scene>
// </Router>