import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Login extends React.Component {
    render() {
        return(
            <div className='login-container'>
                <h1>Chat</h1>
                <input type="text" placeholder='Username' name='username'/>
                <button>JOIN</button>
            </div>
        )
    }
}