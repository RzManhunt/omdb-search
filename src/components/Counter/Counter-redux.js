import { connect } from 'react-redux';
import { Counter } from './Counter';


const mapStateToProps = (state, ownProps) => {
  return { counter: state.counter }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'}),
    reset: () => dispatch({type: 'RESET'})
  }
}

const createConnect = connect(mapStateToProps, mapDispatchToProps);

const CounterWithRedux = createConnect(Counter);

export { CounterWithRedux as Counter };