import { expect } from 'chai';

import nasaPictureOfTheDayReducer, { initialState } from './nasaPictureOfTheDay';

import {
    putNasaPictureOfTheDay,
    putNasaPictureOfTheDayError,
    putNasaPictureOfTheDayLoading,
    putDisplayNasaPictureOfTheDayExplanation
} from '../actions/nasaPictureOfTheDay';

describe('NASA picture of the day reducer ', () => {
    it('should return the initial state', () => {
      expect(nasaPictureOfTheDayReducer(undefined, {})).deep.equal(initialState);
    });

    it('should reduce PUT_NASA_PICTURE_OF_THE_DAY', () => {
        expect(nasaPictureOfTheDayReducer({}, putNasaPictureOfTheDay("TestAPIData"))).deep.equal({data: 'TestAPIData'});
    });

    it('should reduce PUT_NASA_PICTURE_OF_THE_DAY_ERROR', () => {
        expect(nasaPictureOfTheDayReducer({}, putNasaPictureOfTheDayError("TestError"))).deep.equal({error: 'TestError'});
    });

    it('should reduce PUT_NASA_PICTURE_OF_THE_DAY_LOADING', () => {
        expect(nasaPictureOfTheDayReducer({}, putNasaPictureOfTheDayLoading(true))).deep.equal({isLoading: true});
    });

    it('should reduce PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION', () => {
        expect(nasaPictureOfTheDayReducer({}, putDisplayNasaPictureOfTheDayExplanation(true))).deep.equal({displayExplanation: true});
    });
});