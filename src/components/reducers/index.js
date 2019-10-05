import { combineReducers } from 'redux';

import userReducer from './user';

// Combine with other reducers we may add in the future
const smilApp = combineReducers({
  user: userReducer,
});

export default smilApp;
