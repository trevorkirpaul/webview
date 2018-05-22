import CASES from '../cases';
import { URI } from '../../config';
import { request } from 'graphql-request';
// import axios from 'axios';
import INSURANCE_DATA from '../../API/insurancePackages.json';
import DOCTOR_DATA from '../../API/doctors.json';

const { USER } = URI;

const { ATTEMPT_LOGIN, SUCCESS_LOGIN, FAIL_LOGIN, RESET_LOGIN } = CASES.APP;
const { DOCTOR } = CASES;

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
    type: ATTEMPT_LOGIN,
    loading: true,
    loaded: false,
    error: false,
    auth: false,
  });
  const {
    email,
    firstName,
    lastName,
    city,
    state,
    country,
    zip,
    phone,
    dob,
    password,
  } = user;
  //   const mutation = `
  //   mutation CreateUser(
  //     $email: String
  //   ) {
  //     signup(email: $email) {
  //       id
  //     }
  //   }
  // `;
  const variables = {
    email,
    firstName,
    lastName,
    city,
    state,
    country,
    zip,
    phone,
    dob,
    password,
  };
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
        email
      }
    }
  `;
  request('http://localhost:4000', mutation, variables)
    .then(data => console.log('SUCCESS', { data }))
    .catch(err => console.log('ERROR', { err }));
  // const createUserQL = `
  // mutation {
  //   signup(
  //     email: ${user.email}
  //     firstName: ${user.firstName}
  //     lastName: ${user.lastName}
  //     city: ${user.city}
  //     state: ${user.state}
  //     country: ${user.country}
  //     zip: ${user.zip}
  //     phone: ${user.phone}
  //     dob: ${user.dob}
  //     password: ${user.password}
  //   ) {
  //     id
  //     email
  //     firstName
  //   }
  // }`;

  // request('http://localhost:4000', createUserQL)
  //   .then(data => console.log('SUCCESS', { data }))
  // .then(user => {
  //   return dispatch({
  //     type: SUCCESS_LOGIN,
  //     loading: false,
  //     loaded: true,
  //     error: false,
  //     auth: true,
  //     user,
  //   });
  // })
  // .catch(err => console.log(err));

  // axios
  //   .post(USER.CREATE, user)
  //   .then(user => {
  //     return dispatch({
  //       type: SUCCESS_LOGIN,
  //       loading: false,
  //       loaded: true,
  //       error: false,
  //       auth: true,
  //       user,
  //     });
  //   })
  //   .catch(() => {
  //     return dispatch({
  //       type: FAIL_LOGIN,
  //       loading: false,
  //       loaded: true,
  //       error: true,
  //       auth: false,
  //     });
  //   });
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
