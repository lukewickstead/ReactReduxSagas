import { call } from 'redux-saga/effects';
import { consoleLog } from '../helpers/consoleHelpers';

export function* helloWorldSaga() {
    yield call(consoleLog, 'Hello World');
}
