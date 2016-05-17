import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Modal } from 'react-native';

import ButtonDrive from './buttonDrive';
import ButtonReverse from './buttonReverse';
import Debugger from './debugger';

const height = Dimensions.get('window').height;

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonHolder}>
            <ButtonDrive />
          </View>
          <View style={styles.buttonHolder}>
            <ButtonReverse />
          </View>
        </View>
        <View style={styles.debuggerHolder}>
          <Debugger />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f00',
  },
  buttonContainer: {
    flexDirection: 'column',
    width: height / 2,
  },
  buttonHolder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  debuggerHolder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
