import { call, put, takeEvery, select } from 'redux-saga/effects';
import moment from 'moment';

import { getAstronomyPictureOfTheDay } from '../api/nasaApis';
import {consoleError, consoleLog} from '../helpers/consoleHelpers';
import { GET_NASA_PICTURE_OF_THE_DAY } from '../actions/actionTypes';
import { getNasaPicOfDayDataFromState } from '../selectors/nasaPictureOfTheDaySelector';

import
{
    putNasaPictureOfTheDay,
    putNasaPictureOfTheDayError,
    putNasaPictureOfTheDayLoading
}   from '../actions/nasaPictureOfTheDay'

export function* getNASAPictureOfTheDaySaga({value}) {
    try {
        yield put(putNasaPictureOfTheDayLoading(true));           

        let callDate = moment()

        if(value) {
            const picOfDayData = yield select(getNasaPicOfDayDataFromState);
            callDate = picOfDayData.date ? moment(picOfDayData.date, 'YYYY-MM-DD').add(value, 'days') : moment();
        }

        yield call(consoleLog, `Calling NASA pic of day for ${callDate.format('YYYY-MM-DD')}`);
        const response = yield call(getAstronomyPictureOfTheDay, callDate.format('YYYY-MM-DD'));

        yield put(putNasaPictureOfTheDay(response.data));           
    } catch (error) {
        yield call(consoleError, 'Error calling NASA ipc of day for...');
        yield call(consoleError, error);
        yield put(putNasaPictureOfTheDayError('Error calling NASA ipc of day'));
    } finally {
        yield put(putNasaPictureOfTheDayLoading(false));
    }
}

export default function *watchNasaPictureOfDay() {
    yield takeEvery(GET_NASA_PICTURE_OF_THE_DAY, getNASAPictureOfTheDaySaga);
}
