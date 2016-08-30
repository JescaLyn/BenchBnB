import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  currentUser: null,
  errors: []
}

const SessionReducer = (state = defaultState, action) => {
  let newState = merge({}, defaultState);

  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      return newState;
    case SessionConstants.RECEIVE_ERRORS:
      newState.errors = action.errors
      return newState;
    case SessionConstants.LOGOUT:
      return newState;
    default:
      return state;
  }
}

export default SessionReducer;
