import { 
    FAIL_FETCH,
    START_FETCH,
    FINISH_FETCH,
} from './types';
import Axios from 'axios';

export const startFetchData = () => ({
  type: START_FETCH
});

export const failFetchData = error => ({
  type: FAIL_FETCH,
  payload: error
});

export const finishFetchData = data => ({
  type: FINISH_FETCH,
  payload: data
});

export function fetchProducts() {
  return dispatch => {
    dispatch(startFetchData());
    return Axios("http://ec2-13-127-117-101.ap-south-1.compute.amazonaws.com:8080/api/invoice")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(finishFetchData(json.data));
        return json.data;
      })
      .catch(error => dispatch(failFetchData(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}