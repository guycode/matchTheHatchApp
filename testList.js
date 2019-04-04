/* import React from 'react';
import {  View,Text, Thumbnail, List, Separator, ImageBackground } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from "accordion-collapse-react-native";
import { ListItem } from 'react-native-elements'


const list = [
  {
    name: 'Caddis',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Dry Fly'
  },
  {
    name: 'Whooly Bugger',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'streamer'
  },
  {
    name: 'Caddis',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Dry Fly'
  },
  {
    name: 'Whooly Bugger',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'streamer'
  },
   // more items
]
export default class masterList extends React.Component {
  
  
    render() {
        return (
          <ImageBackground  source={require('./assets/background.png')}  style={{transparency: '40%', width: '100%', height: '100%'}} >
          <View style={{transparency: 100, width: '100%', height: '100%'}}>
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: l.avatar_url } }}
                  title={l.name}
                  subtitle={l.subtitle}
                />
              ))
            }
          </View>
          </ImageBackground>
        )}} */

        import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Galleries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, likes:12, image:"https://lorempixel.com/400/200/nature/6/"},
        {id:2, likes:11, image:"https://lorempixel.com/400/200/nature/5/"} ,
        {id:3, likes:25, image:"https://lorempixel.com/400/200/nature/4/"}, 
        {id:4, likes:12, image:"https://lorempixel.com/400/200/nature/6/"}, 
        {id:5, likes:10, image:"https://lorempixel.com/400/200/sports/1/"}, 
        {id:6, likes:12, image:"https://lorempixel.com/400/200/nature/8/"}, 
        {id:7, likes:34, image:"https://lorempixel.com/400/200/nature/1/"}, 
        {id:8, likes:45, image:"https://lorempixel.com/400/200/nature/3/"},
        {id:9, likes:32, image:"https://lorempixel.com/400/200/nature/4/"},
        {id:9, likes:56, image:"https://lorempixel.com/400/200/nature/5/"},
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/flat_round/50/000000/share.png'}}/>
                        <Text style={[styles.socialBarLabel, styles.share]}>Share</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/color/50/000000/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>{item.likes}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#eee"
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    marginVertical: 8,
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  }
      
})
        