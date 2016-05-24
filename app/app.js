import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import './navigator';

import ButtonDrive from './buttonDrive';
import ButtonReverse from './buttonReverse';
import Steering from './steering';
import Debugger from './debugger';
import Transmitter from './transmitter';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <ButtonDrive />
          <ButtonReverse />
        </View>
        <View style={styles.row}>
          <Debugger />
          <Transmitter />
          <Steering />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f00',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
