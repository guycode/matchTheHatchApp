import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBug } from './BugActions';
import { Button } from 'react-native-elements';
import { Auth } from 'aws-amplify';
import Bugs from './BugLibrary';

export class Home extends React.Component {
  handleSignOut = () => {
    Auth.signOut()
      .then(() => this.props.navigation.navigate('Authentication'))
      .catch(err => console.log(err));
  }

  constructor() {
    super()
    this.state = this.handlePress.bind(this)
    this.state = object={bugs:[]}
  }



  handlePress() {
    return this.props.navigation.navigate('./Camera')
  }
  render() {
    return (
      <View style={styles.container}>
       <Text> We have { this.state.bugs.length } bugs!</Text>
        {/* <Button
          title={ "Add some bugs" }
          onPress={() =>
            this.handlePress
          }
          color={"#379683"}
        />
         <Button
        title="Sign Out"
        onPress={this.handleSignOut}
      /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    textDecorationColor: 'red',
  },
  h1: {
    color: '#000',
    paddingTop: 4, 
    fontSize: 40,
  },
  h2: {
    color: '#500',
    fontSize: 18,
    marginTop: 4,
  },
});



export default connect()(Home);