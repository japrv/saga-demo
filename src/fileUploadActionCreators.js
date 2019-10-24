export function uploadStarted(file) {
    return {
        type: 'UPLOAD_STARTED',
        file: file
    };
};

export function uploadFailed(file, reason) {
    return {
        type: 'UPLOAD_FAILED',
        file: file,
        reason: reason
    };
};

export function uploadSuccess(file, credentials) {
    return {
        type: 'UPLOAD_SUCCEEDED',
        file: file,
        credentials: credentials
    };
};

export function checkingExt(file) {
    return {
        type: 'CHECKING_EXT',
        file: file
    };
}

export function checkingFileSize(file) {
    return {
        type: 'CHECKING_FILE_SIZE',
        file: file
    };
}

export function gettingCredentials(file) {
    return {
        type: 'GETTING_CREDENTIALS',
        file: file
    };
}

export function startFileUpload(file) {
    return {
        type: 'FILE_UPLOAD_REQUESTED',
        file: file
    }
}
