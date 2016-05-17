import React, { Component } from 'react';

function connect(state$, selector = state => state) {
  return function wrap(WrappedComponent) {
    const displayName = WrappedComponent.displayName || WrappedComponent.name;

    return class Connect extends Component {
      componentWillMount() {
        this.subscription = state$.map(selector).subscribe(this.setState.bind(this));
      }
      componentWillUnmount() {
        this.subscription.unsubscribe();
      }
      render() {
        return (
          <WrappedComponent {...this.state} {...this.props} />
        );
      }
    }
  }
}

export default connect;
