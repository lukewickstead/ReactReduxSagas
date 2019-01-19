import {
    GET_NASA_PICTURE_OF_THE_DAY,
    PUT_NASA_PICTURE_OF_THE_DAY,
    PUT_NASA_PICTURE_OF_THE_DAY_ERROR,
    PUT_NASA_PICTURE_OF_THE_DAY_LOADING } from '../actions/actionTypes'

export function getNasaPictureOfTheDay() {
    return { type: GET_NASA_PICTURE_OF_THE_DAY};    
}

export function putNasaPictureOfTheDayError(value) {
    return { type: PUT_NASA_PICTURE_OF_THE_DAY_ERROR, value};    
}

export function putNasaPictureOfTheDayLoading(value) {
    return { type: PUT_NASA_PICTURE_OF_THE_DAY_LOADING, value};    
}

export function putNasaPictureOfTheDay(value) {
    return { type: PUT_NASA_PICTURE_OF_THE_DAY, value };    
}