import { call, all } from 'redux-saga/effects';
import { TodayMusics} from './getTodayMusics';

export default function* rootSaga() {
    yield call(TodayMusics);              
}