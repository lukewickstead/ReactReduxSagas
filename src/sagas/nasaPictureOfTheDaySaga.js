import { call, put } from 'redux-saga/effects';

import {consoleError} from '../helpers/consoleHelpers';
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
        const errorMsg = error.response.data.error.message;
        yield call(consoleError, errorMsg);
        yield put(putNasaPictureOfTheDayError(errorMsg));
    } finally {
        yield put(putNasaPictureOfTheDayLoading(false));           
    }
}
