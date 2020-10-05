import React, { Component } from 'react';
import { render } from 'react-dom';

import { bindActionCreators, createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import './styles.scss';

const initialState = { count: 0 };

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      count: state.count - 1,
    };
  }
  return state;
};

const store = createStore(reducer);

class Counter extends Component {
  render() {
    const { count, increment, decrement } = this.props;

    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}; // Pick up piece of state you want
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment, decrement }, dispatch);
}; // dispatch action

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Counter); // high order component

render(
  <Provider store={store}>
    <CountContainer />
  </Provider>,
  document.getElementById('root'),
);
