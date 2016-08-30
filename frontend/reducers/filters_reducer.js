import { FilterConstants } from '../actions/filter_actions';
import { merge } from 'lodash';

const FiltersReducer = (state = {}, action) => {
  switch (action.type) {
    case FilterConstants.UPDATE_BOUNDS:
      return merge({}, state, { bounds: action.bounds});
    default:
      return state;
  }
};

export default FiltersReducer;
