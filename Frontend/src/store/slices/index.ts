import { combineReducers } from 'redux';
import authReducer from './authSlice';
import packagesReducer from './packagesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  packages: packagesReducer,
});

export default rootReducer;