import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ChatHeader} from "./chat-header";
import {MembersList} from "./members";
import {ChatArea} from "./chat-area";

export class ChatContainer extends React.Component {
    render() {
        return (
            <div className='chat-container'>
                <ChatHeader />
                <MembersList />
                <ChatArea />
            </div>
        )
    }
}