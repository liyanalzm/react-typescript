import { combineReducers } from 'redux';
import { languageReducer } from './store/language/reducers';

export default combineReducers({
  language: languageReducer
});