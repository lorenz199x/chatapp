import React, { Component } from 'react';
import { Platform, View, TouchableOpacity, Text } from 'react-native';
import { Header, Button, Spinner } from './common';
import firebase from 'firebase';
import Login from './Login';
import Chat from './Chat';

import { Router, Scene } from 'react-native-router-flux';
// import Login from './Login';
// import Chat from './Chat';

export default class Index extends Component {
//   state = { loggedIn: null, uid: '', messagesRef: null};

//   componentWillMount() {
//     firebase.initializeApp({
//         apiKey: "AIzaSyBTfmMu1Zk4Xt6r56vPRqUzB9HWmSnzHjc",
//         authDomain: "authentication-33f89.firebaseapp.com",
//         databaseURL: "https://authentication-33f89.firebaseio.com",
//         projectId: "authentication-33f89",
//         storageBucket: "authentication-33f89.appspot.com",
//         messagingSenderId: "895917340125"
//     });

//     firebase.auth().onAuthStateChanged((user) => {
//       console.log('aaaa',user )
//         if(user) {
//             this.setState({ loggedIn: true });
//         }
//         else {
//             this.setState({ loggedIn: false });
//         }
//     });
// }

// setUid(value) {
//   this.uid = value;
// }

// getUid() {
//   return this.uid;
// }

// loadMessages(callback) {
//   this.messagesRef = firebase.database().ref('messages');
//   this.messagesRef.off();
//   const onReceive = (data) => {
//     const message = data.val();
//     callback({
//       _id: data.key,
//       text: message.text,
//       createdAt: new Date(message.createdAt),
//       user: {
//         _id: message.user._id,
//         name: message.user.name,
//       },
//     });
//   };
//   this.messagesRef.limitToLast(20).on('child_added', onReceive);
// }

// // send the message to the Backend
// sendMessage(message) {
//   for (let i = 0; i < message.length; i++) {
//     this.messagesRef.push({
//       text: message[i].text,
//       user: message[i].user,
//       createdAt: firebase.database.ServerValue.TIMESTAMP,
//     });
//   }
// }

// // close the connection to the Backend
// closeChat() {
//   if (this.messagesRef) {
//     this.messagesRef.off();
//   }
// }

// renderContent(){
//   switch (this.state.loggedIn) {
//       case true:
//           return (
            
//               //  <Chat />
//                 <TouchableOpacity style={styles.opacityStyle} onPress={() => firebase.auth().signOut()}>
//                      <Text> Log Out </Text>
//                 </TouchableOpacity>
         
           
//           );
//       case false:
//           return <Login />;
//       default:
//           return <Spinner size="large" />
//   }
// }

  render() {
    return (
      // <View>
      //   <Header headerText="Login chat testing" />
      //     {this.renderContent()}
      // </View>
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='home' title='Home' component={Login}/>
          <Scene key='chat' title='Chat' component={Chat}/>
        </Scene>
      </Router>
    );
  }
}

// const styles = {
//   opacityStyle: {
//       marginLeft: 5,
//       marginRight: 5,
//       alignSelf: 'stretch',
//       backgroundColor: '#fff',
//       borderRadius: 5,
//       borderWidth: 1,
//       borderColor: '#007aff',
//   }
// }
