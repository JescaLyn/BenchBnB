import { BenchConstants } from '../actions/bench_actions';
import { merge } from 'lodash';

const BenchesReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case BenchConstants.RECEIVE_BENCHES:
      newState = {};
      action.benches.forEach(bench => {
        newState[bench.id] = bench;
      });
      return newState;
    case BenchConstants.RECEIVE_BENCH:
      newState = merge({}, state);
      newState[action.bench.id] = action.bench;
      return newState;
    default:
      return state;
  }
};

export default BenchesReducer;
