 import React, { Component } from 'react'
 import { AppRegistry, Text } from 'react-native'

  export default class Hello extends Component {
   render() {
     return (
       <Text>Hello!</Text>
     )
   }
 }

 AppRegistry.registerComponent('reactNativeDemo', () => Hello)
