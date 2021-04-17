import { GET_TODAY, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchTodayMusics() {
    try {
        var received = yield Api.getTodayMusics();
        yield put({ type: FETCH_SUCCEEDED, received });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }
}


export function* TodayMusics() {
    yield takeLatest(GET_TODAY, fetchTodayMusics);
}

