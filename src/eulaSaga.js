import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { store } from './index';
import { acceptEULA, declineEULA } from './messagesActionCreators';
import { sendMessage } from './messagesActionCreators';

function* handleAcceptEULA(action) {
    put(acceptEULA());
    let { bufferedMessage } = store.getState().messages;
    console.warn('accepted');
    // yield call(sendMessage, bufferedMessage.text);
    return;
}

function handleDeclineEULA(action) {
    put(declineEULA());
}

export function* acceptEulaSaga() {
    yield takeEvery('ACCEPT_EULA', handleAcceptEULA);
}

export function* declineEulaSaga() {
    yield takeEvery('DECLINE_EULA', handleDeclineEULA);
}
