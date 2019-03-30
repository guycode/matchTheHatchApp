/* import { createStackNavigator } from 'react-navigation';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

export default AppNavigator; */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';

import Authentication from './Authentication'
import Home from './Home';
import Bugs from './BugLibrary';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBug } from './BugActions';

  
  class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
        </View>
      );
    }
  }
  
  class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        <Text>We have { this.props.screenProps.currentBugs.length } bugs!</Text>
          <Button
            title="Go to your fly library"
            onPress={() => this.props.navigation.navigate('Bugs')}
          />
        </View>
      );
    }
  }
  
  class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings</Text>
          <Button
            title="Go back to home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
  }


  const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
  });
  
  const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
  });
  
  export default createAppContainer(createBottomTabNavigator(
    {
      Authentication: { screen: Authentication },
      Home: HomeStack,
      Bugs: { screen: Bugs},
      Settings: SettingsStack,
    },
    {
      /* Other configuration remains unchanged */
    }
  ));