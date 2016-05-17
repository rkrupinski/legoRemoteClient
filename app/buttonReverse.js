import React, { Component} from 'react';

import actions from './actions';
import connect from './connect';
import state$ from './state';
import Button from './button';

class ButtonReverse extends Component {
  render() {
    return (
      <Button
          onPressIn={this.props.onPressIn}
          onPressOut={this.props.onPressOut}
          icon="arrow-down" />
    );
  }
}

export default connect(state$, state => ({
  onPressIn() {
    actions.input$.onNext({
      type: 'reverse',
    });
  },
  onPressOut() {
    actions.input$.onNext({
      type: 'neutral',
    });
  },
}))(ButtonReverse);
