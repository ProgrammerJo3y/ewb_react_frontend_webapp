import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
    // Call to the server to retrieve the token
    // Currently returns a "positive" resolution to the async call, rather than undefined (i.e., always returns a token)
    return Promise.resolve(1)
}

export default function Login({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // Dummy form submit function taking credentials
    // TODO: Call 'loginUser(credentials)' and set token with response
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-inputs-wrapper">
            <h1>EWB Administrator Portal Login</h1>
            <form onSubmit={ handleSubmit }>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}