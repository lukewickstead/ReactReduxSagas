import { PUT_NASA_PICTURE_OF_THE_DAY, GET_NASA_PICTURE_OF_THE_DAY_ERRORED } from '../actions/actionTypes';

export const initialState = {
    data: {},
    error: '',
    isLoaded: false   
}

export default function nasaPictureOfTheDayReducer(state = initialState, action) {
  switch (action.type) {
    case PUT_NASA_PICTURE_OF_THE_DAY:
      return {...state, data: action.value} ;
    case GET_NASA_PICTURE_OF_THE_DAY_ERRORED:
      return {...state, error: action.value} ;
    default:
      return state;
  }
}