import { combineReducers } from 'redux';
import authReducer from './authSlice';
import packagesReducer from './packagesSlice';
// import other reducers

const rootReducer = combineReducers({
  auth: authReducer,
  packages: packagesReducer,
  // add others
});

export default rootReducer;