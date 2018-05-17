import CASES from '../cases';

const { DATA } = CASES;

const initState = {
  package: null,
  packages: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case DATA.DATA_COMPLETE:
      return {
        ...state,
        packages: action.packages,
      };
    default:
      return state;
  }
};
