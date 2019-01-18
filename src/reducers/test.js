import {PUT_TEST} from '../actions/actionTypes';

export const initialState = {
    test: null,
}

export default function stuff(state = initialState, action) {
  switch (action.type) {
    case PUT_TEST:
      console.log('PUT_TEST');
      return {...state, test: action.value };
    default:
      return state;
  }
}