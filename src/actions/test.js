import {GET_TEST, PUT_TEST} from '../actions/actionTypes'

export function getTest() {
    return { type: GET_TEST};    
}

export function putTest(value) {
    return { type: PUT_TEST, value };    
}