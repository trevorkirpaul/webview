import CASES from '../cases';
// import { URI } from '../../config';
import { request } from 'graphql-request';
import INSURANCE_DATA from '../../API/insurancePackages.json';
import DOCTOR_DATA from '../../API/doctors.json';

// const { USER } = URI;

const {
  ACCOUNT,
  WRAPPER,
  ATTEMPT_LOGIN,
  SUCCESS_LOGIN,
  // FAIL_LOGIN,
  RESET_LOGIN,
} = CASES.APP;
const { DOCTOR } = CASES;

export const initWrapperStyle = () => ({
  type: WRAPPER.INIT,
  fromWrapper: true,
});

export const login = ({ email }) => dispatch => {
  dispatch({
    type: ATTEMPT_LOGIN,
    loading: true,
    loaded: false,
    error: false,
    auth: false,
    email: email || null,
  });
  /// fetch sign in
  setTimeout(() => {
    return dispatch({
      type: SUCCESS_LOGIN,
      loading: false,
      loaded: true,
      error: false,
      auth: true,
      // for testing
      username: 'tkirpaul',
      firstName: 'Trevor',
      lastName: 'Kirpaul',
    });
  }, 0);
};

export const createUser = user => dispatch => {
  dispatch({
    type: ACCOUNT.CREATE_BEGIN,
    loading: true,
    loaded: false,
    error: false,
    auth: false,
    userId: null,
  });
  const variables = { ...user };

  /*
    this is the GraphQL mutation where we plug in
    the fields from `user`. In this code, I'm setting variables
    but we could just plug 
  */
  // const mutation = `
  //   mutation {
  //     signup(email: ${user.email}) {
  //       id
  //     }
  //   }
  // `;
  const mutation = `
    mutation CreateUser(
      $email: String
      $firstName: String
      $lastName: String,
      $city: String,
      $state: String,
      $country: String,
      $zip: Int,
      $phone: Int,
      $dob: Int,
      $password: String,
    ) {
      signup(
        email: $email
        firstName: $firstName
        lastName: $lastName
        city: $city
        state: $state
        country: $country
        zip: $zip
        phone: $phone
        dob: $dob
        password: $password
      ) {
        id
      }
    }
  `;
  // this is from the package "graphql-request"
  // axios like fetch library for GraphQL based fetches
  request('http://localhost:4000', mutation, variables)
    .then(({ signup: { id } }) => {
      return dispatch({
        type: ACCOUNT.CREATE_SUCCESS,
        loading: false,
        loaded: true,
        error: false,
        auth: true,
        userId: id,
      });
    })
    .catch(err =>
      dispatch({
        type: ACCOUNT.CREATE_FAIL,
        loading: false,
        loaded: true,
        error: true,
        auth: false,
      })
    );
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
