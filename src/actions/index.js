
import { FETCH_SUCCEEDED, FETCH_FAILED, GET_TODAY } from './actionTypes';

export const getTodayMovieAction = (musics) => {
    return {
        type: GET_TODAY,
        musics
    }
}

//Action sent by Redux-saga
export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}

