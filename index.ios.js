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
