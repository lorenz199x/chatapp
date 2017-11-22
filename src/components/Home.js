import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import firebase from 'firebase';

import { Actions } from 'react-native-router-flux';

// var config = {
//   apiKey: "AIzaSyD5qFWm9Do_-FRxKENhKOWOYaF7XIB2_Hs",
//   authDomain: "chat-app-92960.firebaseapp.com",
//   databaseURL: "https://chat-app-92960.firebaseio.com",
//   projectId: "chat-app-92960",
//   storageBucket: "chat-app-92960.appspot.com",
//   messagingSenderId: "918472852428"
// };

// firebase.initializeApp(config); 

export default class Home extends Component {
  state = { email: '', password: '', error: '', };

//   componentWillMount() {
//     firebase.initializeApp({
//         // apiKey: "AIzaSyBTfmMu1Zk4Xt6r56vPRqUzB9HWmSnzHjc",
//         // authDomain: "authentication-33f89.firebaseapp.com",
//         // databaseURL: "https://authentication-33f89.firebaseio.com",
//         // projectId: "authentication-33f89",
//         // storageBucket: "authentication-33f89.appspot.com",
//         // messagingSenderId: "895917340125"

//         apiKey: "AIzaSyD5qFWm9Do_-FRxKENhKOWOYaF7XIB2_Hs",
//         authDomain: "chat-app-92960.firebaseapp.com",
//         databaseURL: "https://chat-app-92960.firebaseio.com",
//         projectId: "chat-app-92960",
//         storageBucket: "chat-app-92960.appspot.com",
//         messagingSenderId: "918472852428"
//     });
// }

  onButtonPress(){
    let { email, password } = this.state;
    this.setState({ error: '', loading: true });
console.log('SSSSs', email, password)
    firebase.auth().signInWithEmailAndPassword(email, password)
     .then(()=>{this.onLoginSuccess.bind(this)
      console.log('success')
    })
     .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(this.onLoginSuccess.bind(this))
         .catch(this.onLoginFailed.bind(this));
    });
}

onLoginFailed(){
    this.setState({
        error: 'Authentifation Failed', 
    });
}

onLoginSuccess(){
    this.setState({
        email: '',
        password: '',
        error: ''
    });
}

  render() {
    console.log(this.state.email, this.state.password)
    return (
      <View style={styles.container}>
        <Text style={[styles.label, {marginTop: 40}]}>
          Enter your name :
        </Text>
        <TextInput
          placeholder='Name'
          style={styles.textInput}
          onChangeText={(name) => {
            this.setState({
              email: name,
            });
          }}
          value={this.state.name}
        />

        <Text style={[styles.label, {marginTop: 40}]}>
          Enter your Password :
        </Text>

         <TextInput
          placeholder='Password'
          style={styles.textInput}
          onChangeText={(password) => {
            this.setState({
              password: password,
            });
          }}
          value={this.state.password}
        />

        <TouchableOpacity
          onPress={() => {
            this.onButtonPress()
            Actions.chat({
              name: this.state.name,
            });
          }}
        >
          <Text style={styles.label}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
  },
  textInput: {
    height: 40,
    marginLeft: 15,
  },
});
