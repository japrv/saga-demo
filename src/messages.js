import {store} from './index';

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function randomTrueOrFalse() {
    return Math.random() >= 0.2;
};

let mId = 0;

function add(text, id) {
    return {
        type: 'ADD_MESSAGE',
        text: text,
        id: id,
        status: 'sent'
    }
};

function bufferMessage(text) {
    return {
        type: 'BUFFER_MESSAGE',
        text: text,
    };
};

function messageDelivered(id) {
    return {
        type: 'MESSAGE_DELIVERED',
        id: id,
    };
};

function messageNotDelivered(id) {
    return {
        type: 'MESSAGE_NOT_DELIVERED',
        id: id,
    };
};

function sendToChatServer(dispatch, text) {
    return async function () {
        await timeout(1000);
        let result = randomTrueOrFalse();
        if (result) {
            dispatch(messageDelivered(text));
        } else {
            dispatch(messageNotDelivered(text));
        }
    }
}

export function acceptEULA() {
    return async function (dispatch) {
        console.warn('acceptEULA');
        dispatch(EULAAccepted());
        dispatch(sendBufferedMessage());
    };
}

export function declineEULA() {
    return {
        type: 'DECLINE_EULA'
    };
}

function sendBufferedMessage() {
    let {bufferedMessage} = store.getState().messages;
    let text = bufferedMessage.text;
    return function(dispatch) {
        dispatch(addMessage(text));
    }
}

function EULAAccepted() {
    return {
        type: 'ACCEPT_EULA'
    };
}

function showEULA(dispatch) {
    return {
        type: 'SHOW_EULA'
    };
}

export function addMessage(text) {
    return async function (dispatch) {
        let state = store.getState();
        if (!state.messages.eula.accepted) {
            dispatch(bufferMessage(text));
            dispatch(showEULA(dispatch));
        } else {
            let id = mId++;
            dispatch(add(text, id));
            dispatch(sendToChatServer(dispatch, id));
        }
    };
};
