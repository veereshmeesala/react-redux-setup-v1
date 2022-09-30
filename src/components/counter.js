import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter, resetCounter } from '../redux/actions/counter';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>{this.props.count}</div>
        <div>
          <button
            type="button"
            onClick={() => this.props.increaseCounter(this.props.count + 1)}
          >
            ++
          </button>
          <button
            type="button"
            onClick={() => this.props.decreaseCounter(this.props.count - 1)}
          >
            --
          </button>
          <button type="button" onClick={() => this.props.resetCounter(0)}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  };
};

export default connect(
  mapStateToProps,
  { increaseCounter, decreaseCounter, resetCounter }
)(Counter);
