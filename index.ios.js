 import React, { Component } from 'react'
 import { AppRegistry, Image, Text, View } from 'react-native'

 class Bananas extends Component {
   render() {
     let pic = {
       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
     }
     return (
       <Image source={pic} style={{width: 193, height: 110}}/>
     )
   }
 }

 class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

 class Props extends Component {
   render() {
     return (
       <View style={{alignItems: 'center', marginTop: 20}}>
       <Bananas />
         <Greeting name='Bob' />
         <Greeting name='Jane' />
         <Greeting name='Greg' />
       </View>
     );
   }
 }

 AppRegistry.registerComponent('reactNativeDemo', () => Props)
