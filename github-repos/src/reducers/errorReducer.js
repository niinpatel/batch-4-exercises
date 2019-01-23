import { GET_ERRORS } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
