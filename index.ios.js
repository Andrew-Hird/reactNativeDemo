import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

class LotsOfStyles extends Component {
  render() {
    return (
      <View style={[styles.flex1, styles.view]}>
        <Text style={[styles.flex1, styles.red]}>flex1, just red</Text>
        <Text style={[styles.flex2, styles.bigblue]}>flex2, just bigblue</Text>
        <Text style={[styles.flex3, styles.bigblue, styles.red]}>flex3, bigblue, then red</Text>
        <Text style={[styles.flex4, styles.red, styles.bigblue]}>flex4, red, then bigblue</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 20
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  flex1: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  flex2: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  flex3: {
    flex: 3,
    backgroundColor: 'steelblue'
  },
  flex4: {
    flex: 4,
    backgroundColor: 'black'
  }
})

AppRegistry.registerComponent('reactNativeDemo', () => LotsOfStyles)
