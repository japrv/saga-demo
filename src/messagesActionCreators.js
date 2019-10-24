export function add(text, id) {
    return {
        type: 'ADD_MESSAGE',
        text: text,
        id: id,
        status: 'sent'
    }
};

export function sendMessage(text) {
    return {
        type: 'SEND_MESSAGE',
        text: text,
    }
};

export function bufferMessage(text) {
    console.warn('bufferMessage');
    return {
        type: 'BUFFER_MESSAGE',
        text: text,
    };
};

export function messageDelivered(id) {
    return {
        type: 'MESSAGE_DELIVERED',
        id: id,
    };
};

export function messageNotDelivered(id) {
    return {
        type: 'MESSAGE_NOT_DELIVERED',
        id: id,
    };
};

export function declineEULA() {
    return {
        type: 'DECLINE_EULA'
    };
}

export function acceptEULA() {
    return {
        type: 'ACCEPT_EULA'
    };
}

export function showEULA(dispatch) {
    return {
        type: 'SHOW_EULA'
    };
}