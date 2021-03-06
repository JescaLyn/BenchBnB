export const SessionConstants = {
  SIGN_UP: "SIGN_UP",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS:   "RECEIVE_ERRORS",
};

export const signUp = user => ({
  type: SessionConstants.SIGN_UP,
  user
});

export const login = user => ({
  type: SessionConstants.LOGIN,
  user
});

export const logout = () => ({
  type: SessionConstants.LOGOUT
});

export const receiveCurrentUser = user => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
