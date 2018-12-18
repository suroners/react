import { combineReducers } from 'redux';

import { authentication } from './authentication';

const rootReducer = combineReducers({
    authentication,
    // registration,
});

export default rootReducer;