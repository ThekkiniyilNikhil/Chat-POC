import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Login} from "./login";
import {ChatContainer} from "./chat-container";


export class App extends React.Component {

    render() {
        return(
            <div>
                {/*<Login />*/}
                <ChatContainer />
            </div>
        )
    }

    public static init(element: HTMLElement){
        ReactDOM.render(<App/>, element);
    }
}