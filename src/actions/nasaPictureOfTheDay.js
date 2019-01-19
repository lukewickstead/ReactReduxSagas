import {
    GET_NASA_PICTURE_OF_THE_DAY,
    PUT_NASA_PICTURE_OF_THE_DAY,
    GET_NASA_PICTURE_OF_THE_DAY_ERRORED } from '../actions/actionTypes'

export function getNasaPictureOfTheDay() {
    return { type: GET_NASA_PICTURE_OF_THE_DAY};    
}

export function getNasaPictureOfTheDayErrored(vaue) {
    return { type: GET_NASA_PICTURE_OF_THE_DAY_ERRORED, vaue};    
}

export function putNasaPictureOfTheDay(value) {
    return { type: PUT_NASA_PICTURE_OF_THE_DAY, value };    
}