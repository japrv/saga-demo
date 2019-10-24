import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
    checkingExt, checkingFileSize, gettingCredentials,
    uploadSuccess, uploadFailed, uploadStarted
} from './fileUploadActionCreators';
import {timeout, randomTrueOrFalse} from './utils';

function* checkFileExtension(file) {
    yield put(checkingExt(file));
    yield timeout(1000);
    let result = randomTrueOrFalse();
    if (!result)
        throw new Error('NOT SUPPORTED EXTENSION');
};

function* checkFileSize(file) {
    yield put(checkingFileSize(file));
    yield timeout(1000);
    let result = randomTrueOrFalse();
    if (!result)
        throw new Error('NOT SUPPORTED SIZE');
};

function* getCredentials(file) {
    yield put(gettingCredentials(file));
    yield timeout(1000);
    let result = randomTrueOrFalse();
    if (result) {
        return 'SOME CREDENTIALS';
    } else {
        throw new Error('GET CREDENTIALS FAILED');
    }
};

function* uploadFile(action) {
    let { file } = action;
    try {
        yield put(uploadStarted(file));
        yield call(checkFileExtension, file);
        yield call(checkFileSize, file);
        const credentials = yield call(getCredentials, file);
        yield put(uploadSuccess(file, credentials));
    } catch ({message}) {
        yield put(uploadFailed(file, message));
    }
}

export function* fileUploadSaga() {
    yield takeLatest("FILE_UPLOAD_REQUESTED", uploadFile);
}
