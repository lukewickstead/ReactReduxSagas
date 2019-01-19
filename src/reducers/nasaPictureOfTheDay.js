import {
  PUT_NASA_PICTURE_OF_THE_DAY,
  PUT_NASA_PICTURE_OF_THE_DAY_ERROR,
  PUT_NASA_PICTURE_OF_THE_DAY_LOADING
} from '../actions/actionTypes';

export const initialState = {
    data: {},
    error: '',
    isLoading: false   
}

export default function nasaPictureOfTheDayReducer(state = initialState, action) {
  switch (action.type) {
    case PUT_NASA_PICTURE_OF_THE_DAY:
      return {...state, data: action.value} ;
    case PUT_NASA_PICTURE_OF_THE_DAY_ERROR:
      return {...state, error: action.value} ;
    case PUT_NASA_PICTURE_OF_THE_DAY_LOADING:
      return {...state, isLoading: action.value} ;
    default:
      return state;
  }
}