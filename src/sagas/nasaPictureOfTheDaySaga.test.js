/* eslint-disable no-unused-expressions */
import moment from 'moment';
import { expect } from 'chai';
import { call, put, select } from 'redux-saga/effects'

import { consoleLog, consoleError} from '../helpers/consoleHelpers';
import { getAstronomyPictureOfTheDay } from '../api/nasaApis';
import { getNASAPictureOfTheDaySaga } from './nasaPictureOfTheDaySaga';
import { getNasaPicOfDayDataFromState } from '../selectors/nasaPictureOfTheDaySelector';

import
{
    putNasaPictureOfTheDay,
    putNasaPictureOfTheDayError,
    putNasaPictureOfTheDayLoading
}   from '../actions/nasaPictureOfTheDay'

describe('NASSA  Picture of the day saga', () => {
    it('when a successful call is made for today', () => {

        let callDate = moment().format('YYYY-MM-DD');
        const saga = getNASAPictureOfTheDaySaga({value: undefined});

        expect(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoading(true)));
        expect(saga.next().value).to.deep.equal(call(consoleLog, `Calling NASA pic of day for ${callDate}`));
        expect(saga.next().value).to.deep.equal(call(getAstronomyPictureOfTheDay, callDate));
        expect(saga.next({ data: 'test data' }).value).to.be.deep.equal(put(putNasaPictureOfTheDay('test data')));
        expect(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoading(false)));
        expect(saga.next().done).to.be.true;
    });

    it('when a unuccessful call is made for today', () => {

        let callDate = moment().format('YYYY-MM-DD');
        const saga = getNASAPictureOfTheDaySaga({value: undefined});

        expect(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoading(true)));
        expect(saga.next().value).to.deep.equal(call(consoleLog, `Calling NASA pic of day for ${callDate}`));
        expect(saga.next().value).to.deep.equal(call(getAstronomyPictureOfTheDay, callDate));
        expect(saga.throw({ error: 'test error' }).value).to.be.deep.equal(call(consoleError, 'Error calling NASA ipc of day for...'));
        expect(saga.next().value).to.be.deep.equal(call(consoleError, { error: 'test error' }));
        expect(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayError('Error calling NASA ipc of day')));
        expect(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoading(false)));
        expect(saga.next().done).to.be.true;
    });

    it('when a successful call is made for another day', () => {

        let runDate = '2018-01-31';
        let callDate = '2018-01-30';
        const saga = getNASAPictureOfTheDaySaga({value: -1});

        expect(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoading(true)));
        expect(saga.next().value).to.deep.equal(select(getNasaPicOfDayDataFromState));
        expect(saga.next({date: runDate}).value).to.deep.equal(call(consoleLog, `Calling NASA pic of day for ${callDate}`));
        expect(saga.next().value).to.deep.equal(call(getAstronomyPictureOfTheDay, callDate));
        expect(saga.next({ data: 'test data' }).value).to.be.deep.equal(put(putNasaPictureOfTheDay('test data')));
        expect(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoading(false)));
        expect(saga.next().done).to.be.true;
    });
});