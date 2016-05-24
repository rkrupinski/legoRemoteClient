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
          <Icon name={this.props.icon} color="#fff" size={height / 3} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: height / 1.5,
    height: height / 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: height / 20,
    borderRadius: height / 10,
    borderColor: '#fff',
  },
});

export default Button;
