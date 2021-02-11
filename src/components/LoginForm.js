import React, { useState } from 'react'
import axios from 'axios'
import { WindowsFilled } from '@ant-design/icons'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()

        const authObject = {
            'Project-ID': "2d65d1a7-33bb-4cf3-9607-9cea3670e804",
            'User-Name': username,
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch (error) {
            setError('Oops, Incorrect Credentials.')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    )

}

export default LoginForm