import CASES from '../cases';

const initState = {
  loading: false,
  loaded: true,
  error: false,
  auth: false,
  userId: null,
  fromWrapper: false,
  confirm: null,
  username: null,
  quiz: null
};

const {
  ATTEMPT_LOGIN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  RESET_LOGIN,
  ACCOUNT,
  WRAPPER,
} = CASES.APP;
const { DATA } = CASES;

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
        username: action.username,
      };
    case ACCOUNT.CREATE_BEGIN:
      return {
        ...state,
        loading: action.loading,
        loaded: action.loaded,
        error: action.error,
        auth: action.auth,
        userId: action.userId,
      };
    case ACCOUNT.CREATE_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        loaded: action.loaded,
        error: action.error,
        auth: action.auth,
        userId: action.userId,
      };
    case ACCOUNT.CREATE_FAIL:
      return {
        ...state,
        loading: action.loading,
        loaded: action.loaded,
        error: action.error,
        auth: action.auth,
      };
    case FAIL_LOGIN:
      return {
        loading: action.loading,
        loaded: action.loaded,
        error: action.error,
        auth: action.auth,
      };
    case RESET_LOGIN:
      return initState;
    case DATA.LOAD_DATA:
      return {
        ...state,
        loading: action.loading,
        loaded: action.loaded,
      };
    case DATA.DATA_COMPLETE:
      return {
        ...state,
        loading: action.loading,
        loaded: action.loaded,
      };
    case WRAPPER.INIT:
      return {
        ...state,
        fromWrapper: action.fromWrapper,
      };
    case '@@failed_to_confirm':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        loaded: action.loaded,
        confirm: action.confirm
      };
    case '@@yes_confirm':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        loaded: action.loaded,
        confirm: action.confirm
      };
    case '@@quiz_startFetch':
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
        quiz: null
      };
    case '@@quiz_completeFetch':
      return {
        ...state,
        loading: false,
        loaded: true,
        error: false,
        quizTitle: action.quizTitle,
        questions: action.questions,
      }
    default:
      return state;
  }
};
