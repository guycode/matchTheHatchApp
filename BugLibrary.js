import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBug } from './BugActions';

class Bugs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Add bugs here! </Text>
        
          {this.props.bugs.possible.map((bug, index) => {
            return (<Button 
                      key={bug} 
                      title={`Add ${bug}`} 
                      onPress={() => 
                        this.props.addBug(index) }/>)
      }
        )
          }
        <Button
          title={ 'Back to home' }
          onPress={() =>
            this.props.navigation.navigate('Home')
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addBug,
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { bugs } = state
  return { bugs }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);