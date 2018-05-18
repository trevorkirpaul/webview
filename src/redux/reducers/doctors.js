import CASES from '../cases';

const { DOCTOR } = CASES;

const initState = {
  doctor: null,
  doctors: null,
  loading: false,
  loaded: true,
};

export default (state = initState, action) => {
  switch (action.type) {
    case DOCTOR.LOAD_DATA:
      return {
        ...state,
        loading: action.loading,
        loaded: action.loaded,
      };
    case DOCTOR.DATA_COMPLETE:
      return {
        ...state,
        doctors: action.doctors,
        loading: action.loading,
        loaded: action.loaded,
      };
    case DOCTOR.SELECT:
      return {
        ...state,
        doctor: action.id,
      };
    case DOCTOR.CLEAR:
      return {
        ...state,
        doctor: null,
      };
    default:
      return state;
  }
};
