import { START_FETCH, FINISH_FETCH, FAIL_FETCH, CHANGE_FONT } from "../actions/types";

const initialState = {
  info: {},
  isFetching: false,
  error: null,
  font: '10px',
};

const info = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH:
      return { ...state, isFetching: true };
    case FINISH_FETCH:
      return {...state, isFetching: false, info: action.payload, error: null };
    case FAIL_FETCH:
      return { ...state, isFetching: false, error: action.payload };
    case CHANGE_FONT:
      return {...state, font:action.payload}
    default:
      return state;
  }
};

export default info;
