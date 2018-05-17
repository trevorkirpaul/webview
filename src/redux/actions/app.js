import CASES from '../cases';
import { URI } from '../../config';
import axios from 'axios';

const { USER } = URI;

const { ATTEMPT_LOGIN, SUCCESS_LOGIN, FAIL_LOGIN, RESET_LOGIN } = CASES.APP;

export const login = () => dispatch => {
  dispatch({
    type: ATTEMPT_LOGIN,
    loading: true,
    loaded: false,
    error: false,
    auth: false,
  });
  /// fetch sign in
  setTimeout(() => {
    return dispatch({
      type: SUCCESS_LOGIN,
      loading: false,
      loaded: true,
      error: false,
      auth: true,
    });
  }, 5000);
};

export const createUser = user => dispatch => {
  dispatch({
    type: ATTEMPT_LOGIN,
    loading: true,
    loaded: false,
    error: false,
    auth: false,
  });

  axios
    .post(USER.CREATE, user)
    .then(user => {
      return dispatch({
        type: SUCCESS_LOGIN,
        loading: false,
        loaded: true,
        error: false,
        auth: true,
        user,
      });
    })
    .catch(() => {
      return dispatch({
        type: FAIL_LOGIN,
        loading: false,
        loaded: true,
        error: true,
        auth: false,
      });
    });
};

export const resetApp = () => ({ type: RESET_LOGIN });
