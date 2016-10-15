import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
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
})

AppRegistry.registerComponent('reactNativeDemo', () => LotsOfStyles)
