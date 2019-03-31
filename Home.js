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
  render() {
    return (
      <View style={styles.container}>
       <Text> We have { this.props.bugs.current.length } bugs!</Text>
        <Button
          title={ "Add some bugs" }
          onPress={() =>
            this.props.navigation.navigate('Bugs')
          }
        />
         <Button
        title="Sign Out"
        onPress={this.handleSignOut}
      />
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

const mapStateToProps = (state) => {
  const { bugs } = state
  return { bugs }
};

export default connect(mapStateToProps)(Home);