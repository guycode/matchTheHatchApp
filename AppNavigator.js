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
import Articles1 from './articles1';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBug } from './BugActions';

  
/*   class DetailsScreen extends React.Component {
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
        <Home />
      );
    }
  }
  


  const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
  }); */
  
  export default createAppContainer(createBottomTabNavigator(
    {
      Authentication: { screen: Authentication },
      Bugs: { screen: Bugs},
      Home: {screen: Home },
      List: {screen: Articles1}, 
    },
    {
      /* Other configuration remains unchanged */
    }
  ));