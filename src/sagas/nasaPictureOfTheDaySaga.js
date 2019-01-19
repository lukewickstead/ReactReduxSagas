import { call, put } from 'redux-saga/effects';

import {consoleLog} from '../helpers/consoleHelpers';
import { getAstronomyPictureOfTheDay } from '../api/nasaApis';

import
{
    putNasaPictureOfTheDay,
    putNasaPictureOfTheDayError,
    putNasaPictureOfTheDayLoading
}   from '../actions/nasaPictureOfTheDay'

export function* nasaPictureOfTheDaySaga() {

    try {
        yield put(putNasaPictureOfTheDayLoading(true));           
        const response = yield call(getAstronomyPictureOfTheDay);
        yield put(putNasaPictureOfTheDay(response.data));           
    } catch (error) {
        yield call(consoleLog, error);
        yield put(putNasaPictureOfTheDayError(error));
    } finally {
        yield put(putNasaPictureOfTheDayLoading(false));           
    }
}
