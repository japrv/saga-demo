export const test = (state = {}, action) => {
    switch (action.type) {
        case 'ACTION1':
            return { test: 'action1' };
        case 'ACTION2':
            return { test: 'action2' };
        case 'ACTION3':
            return { test: 'action3' };
        default:
            return state;
    }
};

export const fileUploader = (state = { status: 'Not started', file: 'No File' }, action) => {
    switch (action.type) {
        case 'UPLOAD_STARTED':
            return { status: 'UPLOAD_STARTED', file: action.file };
        case 'UPLOAD_FAILED':
            return { status: `UPLOAD_FAILED. Reason: ${action.reason}`, file: action.file };
        case 'UPLOAD_SUCCEEDED':
            return { status: 'UPLOAD_SUCCEEDED', file: action.file, credentials: action.credentials };
        case 'CHECKING_EXT':
            return { status: 'CHECKING_EXTENSION', file: action.file };
        case 'CHECKING_FILE_SIZE':
            return { status: 'CHECKING_FILE_SIZE', file: action.file };
        case 'GETTING_CREDENTIALS':
            return { status: 'GETTING_CREDENTIALS', file: action.file };
        default:
            return state;
    }
};

export const messages = (state = { messages: [], eula: { show: false, accepted: false }, bufferedMessage: null }, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, { text: action.text, id: action.id, status: action.status }]
            };
        case 'MESSAGE_DELIVERED':
            return {
                ...state,
                messages: state.messages.map(message => message.id === action.id ? { ...message, status: 'delivered' } : message)
            };
        case 'MESSAGE_NOT_DELIVERED':
            return {
                ...state,
                messages: state.messages.map(message => message.id === action.id ? { ...message, status: 'not_delivered' } : message)
            };
        case 'SHOW_EULA':
            return {
                ...state,
                eula: { ...state.eula, show: true }
            };
        case 'ACCEPT_EULA':
            return {
                ...state,
                eula: { ...state.eula, accepted: true, show: false }
            };
        case 'DECLINE_EULA':
            return {
                ...state,
                bufferedMessage: null,
                eula: { ...state.eula, accepted: false, show: false }
            };
        case 'BUFFER_MESSAGE':
            return {
                ...state,
                bufferedMessage: {text: action.text }
            };
        default:
            return state;
    }
};
