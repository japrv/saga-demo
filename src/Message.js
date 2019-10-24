import React from 'react';
import { connect } from 'react-redux'
import {sendMessage, declineEULA, acceptEULA} from './messagesActionCreators';

const Message = ({ messages, eula, sendMessage, acceptEULA, declineEULA }) => {
    let input;
    return (
        <div>
            <input ref={(el => input = el)} type='text'></input>
            <button onClick={() => {
                if (input && input.value)
                    sendMessage(input && input.value);
            }}>Send</button>
            {messages.map(message => <div key={message.id}>
                {message.id} {message.text} {message.status}
            </div>)}
            {eula.show ? <div>
                <button onClick={() => {acceptEULA();}}>ACCEPT EULA</button>
                <button onClick={() => {declineEULA();}}>DECLINE EULA</button>
            </div> : null}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages,
        eula: state.messages.eula
    }
};

const mapDispatchToProps = { sendMessage, acceptEULA, declineEULA };

export default connect(mapStateToProps, mapDispatchToProps)(Message);