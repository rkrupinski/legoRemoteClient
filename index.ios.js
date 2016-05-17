/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Rx from 'rx';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/app';

class legoRemoteClient extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('legoRemoteClient', () => legoRemoteClient);
