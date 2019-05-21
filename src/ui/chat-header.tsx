import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class ChatHeader extends React.Component {
    render() {
        return (
            <div className='chat-header'>
                <h2>Chat</h2>
                <button><i className="fas fa-power-off"></i></button>
            </div>
        )
    }
}