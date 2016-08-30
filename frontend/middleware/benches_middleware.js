import { BenchConstants, receiveBenches, requestBenches, receiveBench }
  from '../actions/bench_actions';
import { FilterConstants } from '../actions/filter_actions';
import { fetchBenches, createBench } from '../util/bench_api_util';

const BenchesMiddleware = ({ getState, dispatch }) => next => action => {
  let success;
  switch(action.type) {
    case BenchConstants.REQUEST_BENCHES:
      success = data => dispatch(receiveBenches(data));
      const filters = getState().filters;
      fetchBenches(success, filters);
      break;
    case BenchConstants.CREATE_BENCH:
      success = data => dispatch(receiveBench(data));
      createBench(success, { bench: action.bench });
    case FilterConstants.UPDATE_BOUNDS:
      next(action);
      dispatch(requestBenches());
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
