import firebase from 'firebase';

class Backend {
  email = '';
  password = '';
  uid = '';
  messagesRef = null;
  loggedIn= null;

  // initialize Firebase Backend
  constructor() {
    var config = {
      apiKey: "AIzaSyBTfmMu1Zk4Xt6r56vPRqUzB9HWmSnzHjc",
      authDomain: "authentication-33f89.firebaseapp.com",
      databaseURL: "https://authentication-33f89.firebaseio.com",
      projectId: "authentication-33f89",
      storageBucket: "authentication-33f89.appspot.com",
      messagingSenderId: "895917340125"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            //this.setState({ loggedIn: true });
            this.setUid(user.uid);
        }
        //else {
         // this.setState({ loggedIn: false });
          // firebase.auth().signInWithEmailAndPassword(email, password)
          //   .catch(() => {
          //     firebase.auth().createUserWithEmailAndPassword(email, password)
          // });
       // }
    });
  }

  setUid(value) {
    this.uid = value;
  }

  getUid() {
    return this.uid;
  }

  // retrieve the messages from the Backend
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }

  // send the message to the Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  
  // close the connection to the Backend
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new Backend();
