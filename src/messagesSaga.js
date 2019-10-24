import { store } from './index';
import { timeout, randomTrueOrFalse } from './utils';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { acceptEULA, add, bufferMessage, messageDelivered, showEULA, messageNotDelivered } from './messagesActionCreators';

let mId = 0;

function* sendToChatServer(id) {
    yield timeout(1000);
    let result = randomTrueOrFalse();
    if (result) {
        return put(messageDelivered(id));
    } else {
        return put(messageNotDelivered(id));
    }
}

function* bufferMessageAndShowEula(text) {
    yield put(bufferMessage(text));
    yield put(showEULA());
}

function* addMessage(text) {
    let state = store.getState();
    if (!state.messages.eula.accepted) {
        yield put(bufferMessage(text));
        yield put(showEULA());
        return;
    } else {
        let id = mId++;
        yield put(add(text, id));
        yield call(sendToChatServer, id);
        return;
    }
};

export function* messagesSaga() {
    yield takeLatest('SEND_MESSAGE', addMessage);
}
