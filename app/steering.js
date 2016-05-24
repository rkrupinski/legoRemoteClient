import { Observable } from 'rx';

import React, { Component } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { Accelerometer } from 'NativeModules';

import constants from './constants';
import actions from './actions';
import connect from './connect';
import state$ from './state'

const TRESHOLD = .4;

Accelerometer.setAccelerometerUpdateInterval(.1);

class Steering extends Component {
  componentWillMount() {
    Accelerometer.startAccelerometerUpdates();

    const steer$ = Observable
        .fromEvent(DeviceEventEmitter,'AccelerationData')
        .map(data => {
          const { acceleration: { y } } = data;

          return y;
        })
        .map(pos => {
          switch (true) {
            case pos > TRESHOLD:
              return constants.LEFT;
            case pos < -TRESHOLD:
              return constants.RIGHT;
            default:
              return constants.NEUTRAL;
          }
        })
        .distinctUntilChanged();

    this._steer$ = steer$.subscribe(direction =>
        this.props.onSteer(direction));
  }
  componentWillUnmount() {
    Accelerometer.stopAccelerometerUpdates();

    this._steer$.dispose();
  }
  render() {
    return null;
  }
}

export default connect(state$, state => ({
  onSteer(direction) {
    actions.steer$.onNext({ direction });
  },
}))(Steering);
