import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { projects } from './projects';

const rootReducer = combineReducers({
    authentication,
    projects,
    // registration,
});

export default rootReducer;