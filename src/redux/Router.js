import React, { Component } from 'react';
import {Platform,} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import ChatRoom from './components/chatForm';
import Login from './components/login';

export default class Entry extends Component {
  render() {
    return (
      <Router>
        <Scene 
            key='root' 
            style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}
        >
          <Scene 
            key='login' 
            title='Login' 
            component={Login}
          />

          <Scene 
            key='chat' 
            title='Chat' 
            component={ChatRoom}
          />
          
        </Scene>
      </Router>
    );
  }
}
