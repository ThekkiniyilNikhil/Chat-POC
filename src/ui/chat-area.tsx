import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class ChatArea extends React.Component {
    render() {
        return (
            <div className='chat-area-container'>
                <div className='chat-area'>
                    <ul>
                        <li>
                            <div className='avatar'></div>
                            <div className='message'>
                                <h2>Jules Winfield</h2>
                                <h4>12/10/1995 10:30</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur ducimus, explicabo facere nemo nulla omnis quaerat
                                    rerum! Asperiores atque, deserunt dolorem id, maiores minus
                                    neque possimus quibusdam rem tenetur vitae.</p>
                            </div>
                        </li>
                        <li>
                            <div className='avatar'></div>
                            <div className='message'>
                                <h2>Vincent Vega</h2>
                                <h4>12/10/1995 10:30</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur ducimus, explicabo facere nemo nulla omnis quaerat
                                    rerum! Asperiores atque, deserunt dolorem id, maiores minus
                                    neque possimus quibusdam rem tenetur vitae.</p>
                            </div>
                        </li>
                    </ul>
                    <div className='send-area'>
                        <input type="text" name='message' placeholder='Enter your messages here'/>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}