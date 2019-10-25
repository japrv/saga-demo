import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { store } from './index';
import { acceptEULA, declineEULA } from './messagesActionCreators';
import { sendMessage } from './messagesActionCreators';

function* handleAcceptEULA(action) {
    let { bufferedMessage } = store.getState().messages;
    yield put(sendMessage(bufferedMessage.text));
}

export function* acceptEulaSaga() {
    yield takeEvery('ACCEPT_EULA', handleAcceptEULA);
}
