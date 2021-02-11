import React from 'react'
import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="2d65d1a7-33bb-4cf3-9607-9cea3670e804"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
