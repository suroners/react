import { createStore, applyMiddleware/*, compose*/ } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let middleware = applyMiddleware(thunk);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    middleware,
    // composeEnhancers(middleware),
);