import { SessionConstants, receiveCurrentUser, receiveErrors }
  from '../actions/session_actions';
import { login, signUp, logout } from '../util/session_api_util';

const SessionMiddleware = ({ getState, dispatch }) => next => action {
  const success = user => dispatch(receiveCurrentUser(user));
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch (action.type) {
    case SessionConstants.LOGIN:
      login(action.user, success, error);
      next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signUp(action.user, success, error);
      next(action);
    default:
      next(action);
  }
}

export default SessionMiddleware;
