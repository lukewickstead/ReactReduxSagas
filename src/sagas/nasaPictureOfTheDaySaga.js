import { call, put } from 'redux-saga/effects';

import {consoleLog} from '../helpers/consoleHelpers';
import { getAstronomyPictureOfTheDay } from '../api/nasaApis';
import { putNasaPictureOfTheDay, getNasaPictureOfTheDayErrored }   from '../actions/nasaPictureOfTheDay'

export function* nasaPictureOfTheDaySaga() {

    try {
        const response = yield call(getAstronomyPictureOfTheDay);
        yield call(consoleLog, response);
        yield put(putNasaPictureOfTheDay(response.data));           
    } catch (error) {
        yield call(consoleLog, error);
        yield put(getNasaPictureOfTheDayErrored(error));           
    }
}
