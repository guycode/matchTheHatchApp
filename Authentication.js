import React from 'react';
import { StyleSheet, Text, View, Modal, Image } from 'react-native';
import { Input, Button, ButtonGroup } from 'react-native-elements';
import { Auth } from 'aws-amplify';
import Logo from './assets/fly_icon.png';

export default class Authentication extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          confirmPassword: '',
          confirmationCode: '',
          modalVisible: false,
          selectedIndex: 0,
          
        };
        this.buttons = ['Sign Up', 'Sign In'] 
    }
      
    updateIndex = () => {
        // if selectedIndex was 0, make it 1. if it was 1, make it 0 dammit
        const newIndex = this.state.selectedIndex === 0 ? 1 : 0
        this.setState({ selectedIndex: newIndex })
    }
    
    handleSignIn = () => {
        const { email, password } = this.state;
        Auth.signIn(email, password)
          // If we are successful, navigate to Home screen
          .then(user => this.props.navigation.navigate('Home'))
          // On failure, display error in console
          .catch(err => console.log(err));
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
                <Text style={styles.h1}>Match The Hatch</Text>
                <Text style={styles.h2}>Rippin' lips since '06</Text>
                <Image
          source={Logo}
          style={styles.image}
        />
                <ButtonGroup    
                    style={styles.button}
                    color={"#fff"}
                    onPress={this.updateIndex}
                    selectedIndex={this.state.selectedIndex}
                    buttons={ this.buttons }
                />
            { this.state.selectedIndex === 0 ? (
  <View style={styles.container}>
    <Input
      label="Email"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={
        // Set this.state.email to the value in this Input box
        (value) => this.setState({ email: value })
      }
      placeholder=" my@email.com"
    />
    <Input
      label="Password"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={
        // Set this.state.email to the value in this Input box
        (value) => this.setState({ password: value })
      }
      placeholder=" passw0rd123"
      secureTextEntry
    />
    <Input
      label="Confirm Password"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={
        // Set this.state.email to the value in this Input box
        (value) => this.setState({ confirmPassword: value })
      }
      placeholder=" passw0rd123"
      secureTextEntry
    />
    <Button
      title='Submit'
      onPress={ this.handleSignUp }
    />
  </View>
) : (
  <View style={styles.container}>
    <Input
      label="Email"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={
        // Set this.state.email to the value in this Input box
        (value) => this.setState({ email: value })
      }
      placeholder=" my@email.com"
    />
    <Input
      label="Password"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={
        // Set this.state.email to the value in this Input box
        (value) => this.setState({ password: value })
      }
      placeholder=" passw0rd123"
      secureTextEntry
    />
    <Button
      title='Submit'
      onPress={ this.handleSignIn }
    />
  </View>
) }
                <Modal visible={this.state.modalVisible}>
                    <View style={styles.container}>
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
      justifyContent: 'center',
      backgroundColor: '#6B8E23',
      alignItems: 'center',
      width: '100%',
    },
    h1: {
      color: '#000',
      fontSize: 40,
      marginTop: 35,
    },
    h2: {
      color: '#FAE042',
      fontSize: 18,
      marginTop: 4,
    },
    image: {
        width: 350,
        height: 200,
        justifyContent: 'center',
      },
  
});
  
    
