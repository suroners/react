import { combineReducers } from 'redux';

import { authentication } from './reducer/authentication.reducer';
// import { registration } from './registration.reducer';

const rootReducer = combineReducers({
    authentication,
    // registration,
});

export default rootReducer;