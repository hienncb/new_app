import { FETCH_FAILED, FETCH_SUCCEEDED } from '../actions/actionTypes';
const movieReducers = (movies = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.received;
        case FETCH_FAILED:
            return [];
        default:
            return movies; //state does not change
    }
}

export default movieReducers;