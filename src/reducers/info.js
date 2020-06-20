import { START_FETCH, FINISH_FETCH, FAIL_FETCH } from "../actions/types";

const initialState = {
  info: {},
  isFetching: false,
  error: null,
};

const info = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH:
      return { ...state, isFetching: true };
    case FINISH_FETCH:
      return { isFetching: false, info: action.payload, error: null };
    case FAIL_FETCH:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};

export default info;
