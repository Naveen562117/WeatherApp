import { combineReducers } from 'redux';
import { errorReducer } from './ErrorReducer';
import { statusReducer } from './StatusReducer';
import { weatherdataReducer } from './weatherdataReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  weatherdata: weatherdataReducer,
});
