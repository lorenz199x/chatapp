import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, BackAndroid,} from 'react-native';
import { GiftedChat, Bubble, SystemMessage, Send, Avatar, } from 'react-native-gifted-chat';
//import Backend from '../Backend';
//import Home from './Home';
import Backend from './gumanaka';
//import Backend from './index';
import firebase from 'firebase';

export default class Chat extends Component {
  constructor(){
    super();
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };

    this._isMounted = false;
    this._isAlright = null;
    this.onLoadEarlier = this.onLoadEarlier.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderSend = this.renderSend.bind(this);
    this.renderAvatar = this.renderAvatar.bind(this);
     
  }
  
  componentWillMount() {

  }

  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  
  componentWillUnmount() {
    Backend.closeChat();
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });
      setTimeout(() => {
        if (this._isMounted === true) {
            this.setState((previousState) => {
              return {
                messages: GiftedChat.append(previousState.messages, message),
                loadEarlier: false,
                isLoadingEarlier: false,
              };
            });
        }
      }, 1000); // simulating network
  }

  answerDemo(message) {
    if (message.length > 0) {
      if ((message[0].image || message[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  // gifted chat styles
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#d8d8d8',
          },

          right: {
            backgroundColor: '#1877FA',
          }
        }}

        textStyle={{
          left: {
            color: 'black',
          },

          right: {
            color: 'white',
          }
        }}
      />
    );
  }


  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  }

  renderSend(props) {
    return (
        <Send
            {...props}
        >
            <View style={{marginRight: 10, marginBottom: 5, backgroundColor: '#1877FA', borderRadius: 50, height: 39, width: 39, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./send.png')} resizeMode={'contain'} style={{ marginLeft: 5, height: 20, width: 20}}/>
            </View>
        </Send>
    );
}

renderAvatar(props){
  return (
    <Avatar
      {...props}
      imageStyle={{
        left: {
          backgroundColor: '#77DA17',
        },
      }}
    />
  );
}


  render() {
    return (
      <GiftedChat
          messages={this.state.messages}
          loadEarlier={this.state.loadEarlier}
          onLoadEarlier={this.onLoadEarlier}
          isLoadingEarlier={this.state.isLoadingEarlier}

          onSend={(message) => {
          Backend.sendMessage(message);
          this.answerDemo(message);
          }}
          
          user={{
          _id: Backend.getUid(),
          email: Backend.getemail(),
          //email: this.props.email,
          }}

          renderFooter={this.renderFooter}
          renderBubble={this.renderBubble}
          renderSystemMessage={this.renderSystemMessage}
          renderSend={this.renderSend}
          renderAvatar={this.renderAvatar}
      /> 
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});
