import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBug } from './BugActions';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

class Bugs extends React.Component {
  constructor() {
        super()
        this.state = object={bugs:[]}
      }
      componentDidMount() {
        return  fetch('http://localhost:8080/api/libraryLists')
        .then(response => this.setState({bugs:response.json()
    })).catch(function(error) {
               console.log('There has been a problem on your compounentDidMount on BugLibrary: ' + error.message);
     // ADD THIS THROW error
      throw error;
    });
    }
  render() {
    return (
      <View style={styles.container}>
        <Text> Add bugs here! </Text>
        
         {/*  {this.state.bugs.possible.map((bug, index) => {
            return (<Card style={styles.list}
                      key={bug} 
                      title={`Add ${bug}`} 
                      onPress={() => 
                        this.state.addBug(index) }/>)
                        
      }
        )
          } */}
        <Button
          title={ 'Go to my saved bugs' }
          onPress={() =>
            this.state.navigation.navigate('Saved')
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
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#000',
    fontSize: 40,
  },
  h2: {
    color: '#500',
    fontSize: 18,
    marginTop: 4,
  },
  list: {
    backgroundColor:"#E6E6E6",
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