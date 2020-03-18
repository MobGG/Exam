import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { historyReducer } from './historyReducer';

export default combineReducers({
    todoReducer,
    historyReducer
});