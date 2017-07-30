import { combineReducers } from 'redux';
import files from './files';
import upload from './upload';

const sohonetApp = combineReducers({
  files,
  upload,
});

export default sohonetApp;
