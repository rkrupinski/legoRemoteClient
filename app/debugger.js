import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import connect from './connect';
import state$ from './state';

class Debugger extends Component {
  render() {
    return (
      <View style={styles.debugger}>
        <Text style={styles.debuggerOutput}>steer: {this.props.steer}</Text>
        <Text style={styles.debuggerOutput}>drive: {this.props.drive}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  debugger: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  debuggerOutput: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Courier New',
  },
});

export default connect(state$)(Debugger);
