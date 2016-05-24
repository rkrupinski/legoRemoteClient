import React, { Component} from 'react';

import constants from './constants';
import actions from './actions';
import connect from './connect';
import state$ from './state';
import Button from './button';

class ButtonDrive extends Component {
  render() {
    return (
      <Button
          onPressIn={this.props.onPressIn}
          onPressOut={this.props.onPressOut}
          icon="arrow-up" />
    );
  }
}

export default connect(state$, state => ({
  onPressIn() {
    actions.drive$.onNext({
      direction: constants.FORWARD,
    });
  },
  onPressOut() {
    actions.drive$.onNext({
      direction: constants.NEUTRAL,
    });
  },
}))(ButtonDrive);
