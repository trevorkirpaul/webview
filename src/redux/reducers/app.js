import CASES from '../cases';

const initState = {
  loading: false,
  loaded: true,
  error: false,
  auth: false,
};

const { ATTEMPT_LOGIN, SUCCESS_LOGIN, FAIL_LOGIN, RESET_LOGIN } = CASES.APP;

export default (state = initState, action) => {
  switch (action.type) {
    case ATTEMPT_LOGIN:
      return {
        ...state,
        loading: action.loading,
        loaded: action.loaded,
        error: action.error,
        auth: action.auth,
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        loading: action.loading,
        loaded: action.loaded,
        error: action.error,
        auth: action.auth,
      };
    case FAIL_LOGIN:
      return {
        ...state,
        loading: action.loading,
        loaded: action.loaded,
        error: action.error,
        auth: action.auth,
      };
    case RESET_LOGIN:
      return initState;
    default:
      return state;
  }
};
