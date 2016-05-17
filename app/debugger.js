import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import connect from './connect';
import state$ from './state';

class Debugger extends Component {
  render() {
    return (
      <View>
        <Text style={styles.debuggerOutput}>{this.props.inputType}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  debuggerOutput: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Courier New',
  },
});

export default connect(state$)(Debugger);
