import CASES from '../cases';
import { URI } from '../../config';
import axios from 'axios';
import INSURANCE_DATA from '../../API/insurancePackages.json';
import DOCTOR_DATA from '../../API/doctors.json';

const { USER } = URI;

const { ATTEMPT_LOGIN, SUCCESS_LOGIN, FAIL_LOGIN, RESET_LOGIN } = CASES.APP;
const { DOCTOR } = CASES;

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
  }, 0);
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

export const loadInsuranceData = () => dispatch => {
  const DATA = INSURANCE_DATA.data;

  dispatch({ type: CASES.DATA.LOAD_DATA, loading: true, loaded: false });

  // fetch insurance data

  const fetchedPackages = false;

  dispatch({
    type: CASES.DATA.DATA_COMPLETE,
    loading: false,
    loaded: true,
    error: false,
    packages: fetchedPackages || DATA,
  });
};

export const loadDoctorData = () => dispatch => {
  const DATA = DOCTOR_DATA.data;
  dispatch({ type: DOCTOR.LOAD_DATA, loading: true, loaded: false });

  // fetch doctor data

  setTimeout(() => {
    return dispatch({
      type: DOCTOR.DATA_COMPLETE,
      loading: false,
      loaded: true,
      doctors: DATA,
    });
  }, 0);
};
