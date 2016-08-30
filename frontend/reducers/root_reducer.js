import benches from './benches_reducer';
import filters from './filters_reducer';
import session from './session_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  benches,
  filters,
  session
});

export default RootReducer;
