import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const height = Dimensions.get('window').height;

class Button extends Component {
  render() {
    return (
      <TouchableOpacity
          activeOpacity={.8}
          delayPressIn={0}
          delayPressOut={0}
          onPressIn={this.props.onPressIn}
          onPressOut={this.props.onPressOut}>
        <View style={styles.button}>
          <Icon name={this.props.icon} color="#fff" size={height / 6} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: height / 2.75,
    height: height / 2.75,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: height / 30,
    borderRadius: height / 15,
    borderColor: '#fff',
  },
});

export default Button;
