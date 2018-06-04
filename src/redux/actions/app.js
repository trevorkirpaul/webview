import CASES from '../cases';
import axios from 'axios';
// import { URI } from '../../config';
// import { request } from 'graphql-request';
import INSURANCE_DATA from '../../API/insurancePackages.json';
import DOCTOR_DATA from '../../API/doctors.json';

// const { USER } = URI;

const {
  ACCOUNT,
  WRAPPER,
  ATTEMPT_LOGIN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  RESET_LOGIN,
} = CASES.APP;
const { DOCTOR } = CASES;

export const initWrapperStyle = () => ({
  type: WRAPPER.INIT,
  fromWrapper: true,
});

export const login = ({ email, password }) => dispatch => {
  dispatch({
    type: ATTEMPT_LOGIN,
    loading: true,
    loaded: false,
    error: false,
    auth: false,
    email,
    password,
  });
  // passWORD1987!
  axios
    .post('http://localhost:3002/auth', ({ username: email, password }))
    .then(data => {
      const { error, data: { UserAttributes } } = data
      if (error) {
        return console.log('error', error)
      }
      if (UserAttributes) {
        const username = UserAttributes[3].Value;
        return dispatch({
          type: SUCCESS_LOGIN,
          loading: false,
          loaded: true,
          error: false,
          auth: true,
          username,
        });
      }
      if (data.error) {
        return dispatch({
          type: FAIL_LOGIN,
          loading: true,
          loaded: false,
          error: false,
          auth: false,
        });
      }
  
    })
    .catch(err => console.log('ERR', err))

  // ? GraphQL Mutation - Fetch to SignIn
  // const userEmail = email;
  // const userPassword = password;
  // const query = `
  //   {
  //     signin(
  //       email: "${email}"
  //       password: "${password}"
  //     ) {
  //       id
  //       firstName
  //       lastName
  //     }
  //   }
  // `;

  // request('http://localhost:4000', query)
  //   .then(({ signin }) => {
  //     const User = signin[0];
      // return dispatch({
      //   type: SUCCESS_LOGIN,
      //   loading: false,
      //   loaded: true,
      //   error: false,
      //   auth: true,
      //   userId: User.id,
      // });
  //   })
  //   .catch(err => {
  //     return dispatch({
  //       type: FAIL_LOGIN,
  //       loading: false,
  //       error: false,
  //       auth: false,
  //       userId: null,
  //     });
  //   });
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
  // const mutation = `
  //   mutation CreateUser(
  //     $email: String
  //     $password: String,
  //   ) {
  //     signup(
  //       email: $email
  //       password: $password
  //     ) {
  //       id
  //     }
  //   }
  // `;
  // this is from the package "graphql-request"
  // axios like fetch library for GraphQL based fetches

  //  ! replaced with call to top level API
  // request('http://localhost:4000', mutation, variables)
  //   .then(({ signup: { id } }) => {
  //     return dispatch({
  //       type: ACCOUNT.CREATE_SUCCESS,
  //       loading: false,
  //       loaded: true,
  //       error: false,
  //       auth: true,
  //       userId: id,
  //     });
  //   })
  //   .catch(err =>
      // dispatch({
      //   type: ACCOUNT.CREATE_FAIL,
      //   loading: false,
      //   loaded: true,
      //   error: true,
      //   auth: false,
      // })
  //   );

  // ! call to top level API
  axios
    .post('http://localhost:3002/user', variables)
    .then(res => {
      console.log(res)
    })
    .catch(({ response }) => {
      console.log('ERROR');
      console.log(response.data.error.message);
      return dispatch({
        type: ACCOUNT.CREATE_FAIL,
        loading: false,
        loaded: true,
        error: true,
        auth: false,
      })
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


export const handleConfirmUser = ({ Username, confirmCode }) => dispatch => {
  console.log('CONFIRMING')
  axios
    .post('http://localhost:3002/confirm', ({ Username, confirmCode }))
    .then(({ data }) => {
      if (data.err) {
        console.log('failed')
        return dispatch({
          type: '@@failed_to_confirm',
          loading: false,
          loaded: true,
          error: true,
          confirm: true
        })
      }
      return dispatch({
        type: '@@yes_confirm',
        loading: false,
        loaded: true,
        error: false,
        confirm: true
      })
    })
    .catch(err => console.log({err}))
}

export const getUserAttributes = ({ Username }) => dispatch => {
  console.log('getting user attr')
  axios
    .post('http://localhost:3002/user/get', ({ Username }))
}
// const quizId = "cji0dk5kf000e097296718tng"
export const fetchQuiz = ({ acctType }) => dispatch => {
  dispatch({
    type: '@@quiz_startFetch',
  })
  axios
    .post('http://localhost:3002/quiz/find/', ({ acctType: 'programmer' }))
    .then(({ data }) => {
      return dispatch({
        type: '@@quiz_completeFetch',
        quizTitle: data.quiz.name,
        questions: data.quiz.questions[0],

      })
    })
    .catch(err => console.log({ err }))
}
