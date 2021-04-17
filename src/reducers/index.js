
import { combineReducers } from 'redux';
import getTodayReducers from './getTodayReducers';
const allReducers = combineReducers({
    getTodayReducers
    //you can add more reducers here, separated by , !
});
export default allReducers;