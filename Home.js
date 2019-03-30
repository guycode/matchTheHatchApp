import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBug } from './BugActions';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        We have { this.props.bugs.current.length } bugs!
        <Button
          title="Add some bugs"
          onPress={() =>
            this.props.navigation.navigate('Bugs')
          }
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