import { expect } from 'chai';

import {
    GET_NASA_PICTURE_OF_THE_DAY,
    PUT_NASA_PICTURE_OF_THE_DAY,
    PUT_NASA_PICTURE_OF_THE_DAY_ERROR,
    PUT_NASA_PICTURE_OF_THE_DAY_LOADING,
    PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION } from './actionTypes'

import {
    getNasaPictureOfTheDay,
    putNasaPictureOfTheDay,
    putNasaPictureOfTheDayError,
    putNasaPictureOfTheDayLoading,
    putDisplayNasaPictureOfTheDayExplanation
} from './nasaPictureOfTheDay';

describe('NASSA Picture of the day actions', () => {
    describe('getNasaPictureOfTheDay', () => {
        it('should return GET_NASA_PICTURE_OF_THE_DAY with value', () => {
            expect(getNasaPictureOfTheDay('TESTVALUE'))
                .to.deep.equal({
                    type: GET_NASA_PICTURE_OF_THE_DAY,
                    value: 'TESTVALUE'
                });
        });
    });

    describe('putNasaPictureOfTheDay', () => {
        it('should return PUT_NASA_PICTURE_OF_THE_DAY with value', () => {
            expect(putNasaPictureOfTheDay('TESTVALUE'))
                .to.deep.equal({
                    type: PUT_NASA_PICTURE_OF_THE_DAY,
                    value: 'TESTVALUE'
                });
        });
    });

    describe('putNasaPictureOfTheDayError', () => {
        it('should return PUT_NASA_PICTURE_OF_THE_DAY_ERROR with value', () => {
            expect(putNasaPictureOfTheDayError('TESTVALUE'))
                .to.deep.equal({
                    type: PUT_NASA_PICTURE_OF_THE_DAY_ERROR,
                    value: 'TESTVALUE'
                });
        });
    });

    describe('putNasaPictureOfTheDayLoading', () => {
        it('should return PUT_NASA_PICTURE_OF_THE_DAY_LOADING with value', () => {
            expect(putNasaPictureOfTheDayLoading('TESTVALUE'))
                .to.deep.equal({
                    type: PUT_NASA_PICTURE_OF_THE_DAY_LOADING,
                    value: 'TESTVALUE'
                });
        });
    });

    describe('putNasaPictureOfTheDayLoading', () => {
        it('should return PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION with value', () => {
            expect(putDisplayNasaPictureOfTheDayExplanation('TESTVALUE'))
                .to.deep.equal({
                    type: PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION,
                    value: 'TESTVALUE'
                });
        });
    });
});
