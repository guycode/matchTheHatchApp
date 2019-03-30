import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Input, Button, ButtonGroup } from 'react-native-elements';
import { Auth } from 'aws-amplify';

export default class Authentication extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          confirmPassword: '',
          confirmationCode: '',
          modalVisible: false,
        };
      }
    
      handleSignUp = () => {
        // Show the current state object
        //alert(JSON.stringify(this.state));
        const { email, password, confirmPassword } = this.state;
            if(password === confirmPassword) {
                Auth.signUp({
                    username: email,
                    password,
                    attributes: { email },
                })
                //on success, show confirmation code modal
                .then(() => this.setState({ modalVisible: true }))
                //of failure, display error on console
                .catch(err => console.log(err));
            } else {
                alert('Passwords do not match.');
            }
      }

      handleConfirmationCode = () => {
        const { email, confirmationCode } = this.state;
        Auth.confirmSignUp(email, confirmationCode, {})
          .then(() => {
            this.setState({ modalVisible: false });
            this.props.navigation.navigate('Home')
          })
          .catch(err => console.log(err));
      }

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to Match The Hatch</Text>
                <ButtonGroup    
                    onPress={this.updateIndex}
                    selectedIndex={this.state.selectedIndex}
                    buttons={ this.buttons }
                />
                <Input
                    label="Email"
                    leftIcon={{ type: "font-awesome", name: "envelope" }}
                    onChangeText={
                        (value) => this.setState({ email: value })
                    }
                    placeholder="my@email.com"
                />
                <Input
                    label="Password"
                    leftIcon={{ type: "font-awesome", name: "lock" }}
                    onChangeText={
                        // Set this.state.password to the value in this Input box
                        (value) => this.setState({ password: value })
                      }
                    placeholder="myP@ssw0rd123"
                    secureTextEntry
                />
                <Input
                    label="Confirm Password"
                    leftIcon={{ type: "font-awesome", name: "lock" }}
                    onChangeText={
                        // Set this.state.password to the value in this Input box
                        (value) => this.setState({ confirmPassword: value})
                      }
                    placeholder="myP@ssw0rd123"
                    secureTextEntry
                />
                <Button 
                    title="Submit"
                    onPress={ this.handleSignUp } 
                />
                <Input 
                    label="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={
                        (value) => this.setState({ email: value })
                    }
                    placeholder="my@email.com"
                />
                <Input
                    label="Password"
                    leftIcon={{ type: 'font-awesome' name: 'lock' }}
                    onChangeText={
                        (value) => this.setState({ password: value })
                    }
                    placeholder="myP@ssw0rd123"
                    secureTextEntry
                    />
                <Button
                    title='Submit'
                    onPress={ this.handleSignIn }
                />
                <Modal
                    visible={this.state.modalVisible}
                    >
                    <View
                        style={styles.container}
                    >
                        <Input
                            label="Confirmation Code"
                            leftIcon={{ type: 'font-awesome', name: 'lock' }}
                            onChangeText={
                                (value) => this.setState({ confirmationCode: value })
                            }
                        />
                        <Button
                            title='Submit'
                            onPress={ this.handleConfirmationCode }
                        />
                    </View>    
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });