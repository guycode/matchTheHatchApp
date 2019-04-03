import React, { Component } from 'react'
import { Text, View, Button, ActivityIndicator, StyleSheet } from 'react-native'
import Clarifai from 'clarifai'

export default class Results extends Component {
  constructor() {
    super()
    this.state = { results: null }
    this.handlePress = this.handlePress.bind(this)
  }
  async componentDidMount() {
    console.log('Starting Comparison')
    const clarifai = new Clarifai.App({
      apiKey: '946dbef923064527bbe52819d9c6e750'
    })

    process.nextTick = setImmediate

    const response = await clarifai.models.predict('Bugs', {
        base64: this.props.navigation.state.params.base64.base64
      })
      const { concepts } = response.outputs[0].data
      this.setState({ results: concepts[0].value > 0.8 })
    }
    handlePress() {
      return this.props.navigation.navigate('Home')
    }
  

  render() {
    return (
      <View style={styles.resultsContainer}>
        {this.state.results === null ? (
          <ActivityIndicator size="large" color="#FFF" />
        ) : this.state.results === true ? (
          <View>
            <Button
              onPress={this.handlePress}
              title="TRY AGAIN"
              color="#379683"
            />
          </View>
        ) : (
          <View>
            <Button
              onPress={this.handlePress}
              title="TRY AGAIN"
              color="#379683"
            />
          </View>
        )}
      </View>
    )
  }
}


/* app.post("/upload", upload.single("photo"), (req, res) => {
    const base64String = Buffer.from(req.file.buffer).toString("base64")
  
    clarifai.models.predict("Bugs", base64String).then(
     response => {
        res.send(Results({
          concepts: response.outputs[0].data.concepts,
          image: base64String
        }))
      },
      err => {
        console.log(err)
      }
    )
  }) */



const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    list: {
      backgroundColor:"#E6E6E6",
    },
    separator: {
      marginTop: 1,
    },
    /******** card **************/
    card:{
      margin: 0,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#DCDCDC",
      backgroundColor: "#DCDCDC",
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
      //overlay efect
      flex: 1,
      height: 200,
      width: null,
      position: 'absolute',
      zIndex: 100,
      left: 0,
      right: 0,
      backgroundColor: 'transparent'
    },
    cardFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 15,
      paddingBottom: 0,
      paddingVertical: 7.5,
      paddingHorizontal: 0
    },
    cardImage:{
      flex: 1,
      height: 150,
      width: null,
    },
    /******** card components **************/
    title:{
      fontSize:22,
      color: "#ffffff",
      marginTop: 10,
      fontWeight:'bold'
    },
    time:{
      fontSize:13,
      color: "#ffffff",
      marginTop: 5
    },
    icon: {
      width:25,
      height:25,
    },
    /******** social bar ******************/
    socialBarContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row',
      flex: 1
    },
    socialBarSection: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flex: 1,
    },
    socialBarlabel: {
      marginLeft: 8,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      color: "#ffffff",
    },
    socialBarButton:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });  