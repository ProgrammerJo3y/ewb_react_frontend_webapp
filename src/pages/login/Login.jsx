import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './login.css';
import logo from './../../assets/images/mammaslaeflogo.png'
import nappy from './../../assets/images/NappiesOnWashingLine.jpg'
import {gql, useMutation, useQuery} from '@apollo/client'

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
        <div className='holder'>
            <div className='left-side'>
            <img src={nappy} alt="NappyOnLine" className='img-nappy'/>
            </div>
            <div className="login-inputs-wrapper">
                <h1 className='heading-text'>EWB Administrator Portal Login</h1>
                <img src={logo} alt= "Logo"/>
                <form className='form' onSubmit={ handleSubmit }>
                    <label>
                        <p className='header-text'>Username</p>
                        <input className='input' type="text" onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        <p className='header-text'>Password</p>
                        <input className='input' type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div className='submit-button-div'>
                        <button type="submit" className='submit-button'>Submit</button>
                    </div>
                </form>
                <p className='copyright-text'> © Mammalaef 2022</p>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}