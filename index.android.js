/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import strings from './strings';

export default class I18N_Sample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {strings.instruction1}
        </Text>
        <Text style={styles.instructions}>
          {strings.instruction2}
        </Text>
        <Text style={styles.instructions}>
          {strings.instruction3}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('I18N_Sample', () => I18N_Sample);
