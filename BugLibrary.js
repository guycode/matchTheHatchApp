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
    justifyContent: 'center',
    backgroundColor: '#6B8E23',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#008F68',
    fontSize: 40,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 4,
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