import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Actions } from 'react-native-router-flux';


export default class LoginForm extends Component {
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