import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import chatReducers from './chatReducers';

export default combineReducers({
    loginBox: loginReducers,
    chatBox: chatReducers,
});