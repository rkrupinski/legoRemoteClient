import { Observable, Subject } from 'rx';

import React, { Component } from 'react';
import { AlertIOS } from 'react-native';

import io from 'socket.io-client/socket.io';
import prependHttp from 'prepend-http';

import connect from './connect';
import state$ from './state';

class Transmitter extends Component {
  _prompt() {
    AlertIOS.prompt(
      `Your mom's address:`,
      null,
      [
        { text: 'Connect', onPress: address => this._connect(address) }
      ]
    );
  }
  _connect(address) {
    this._socket = io(prependHttp(address), {
      transports: ['websocket'],
      timeout: 5000,
    });

    Observable.merge(
      Observable.fromEvent(this._socket, 'error'),
      Observable.fromEvent(this._socket, 'connect_error'),
      Observable.fromEvent(this._socket, 'connect_timeout')
    )
        .take(1)
        .subscribe(() => {
          this._socket.close();
          this._prompt();
        });

    Observable.fromEvent(this._socket, 'connect')
        .take(1)
        .subscribe(() => this._transmit()); // Yay!
  }
  _transmit() {
    this._input$.subscribe(input =>
        this._socket.emit('input', { ...input }));
  }
  componentWillReceiveProps({ drive, steer }) {
    this._input$.onNext({ drive, steer });
  }
  componentWillMount(newProps) {
    this._input$ = new Subject();
    this._prompt();
  }
  componentWillUnmount() {
    this._socket && this._socket.close();
  }
  render() {
    return null;
  }
}

export default connect(state$)(Transmitter);
