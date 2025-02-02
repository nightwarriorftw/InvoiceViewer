import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];
const composeEnhancer = composeWithDevTools({});

const store = createStore(
    rootReducer, 
    initialState, 
    composeEnhancer(applyMiddleware(...middleWare)
));

export default store;
