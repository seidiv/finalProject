// a meeting place for other reducers
import {combineReducers} from 'redux';
import mainboards from './mainboards';
import errors from './errors';
import messages from './messages';
import {searchObjects} from './search';

export default combineReducers({
    mainboards,
    errors,
    messages,
    searchObjects,
});