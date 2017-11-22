import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Actions } from 'react-native-router-flux';


export default class LoginForm extends Component {
    // state = {
    //     name: '',
    //   };
   state = { email: '', password: '', error: '', loading: false };

   onButtonPress(){
       let { email, password } = this.state;
       this.setState({ error: '', loading: true });
       firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
           firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this));
       });
   }

   onLoginFailed(){
       this.setState({
           error: 'Authentifation Failed', loading: false
       });
   }

   onLoginSuccess(){
       this.setState({
           email: '',
           password: '',
           loading: false,
           error: ''
       });

      Actions.chat({ email: this.state.email, });
   }

   renderButton() {
       if(this.state.loading) {
           return <Spinner size="small" />;

       }

       return(
           <Button 
           onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
       );
   }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@test.com"
                        label="Email"
                        onChangeText={email => this.setState({ email })}
                        value={ this.state.email }
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        onChangeText={password => this.setState({ password })}
                        value={ this.state.password }
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {/* <Button
                        onPress={() => {
                            Actions.chat({
                            name: this.state.name,
                            });
                        }}
                      >
                      Log In
                    </Button> */}

                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}