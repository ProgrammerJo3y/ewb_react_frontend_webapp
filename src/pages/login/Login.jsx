import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './login.css';
import logo from './../../assets/images/mammaslaeflogo.png';
import nappy from './../../assets/images/NappiesOnWashingLine.jpg';
import { useMutation } from '@apollo/client';
import { admin_sign_in } from '../../graphql/mutations.jsx'

export default function Login({ setToken }) {
	const [username, setUsername] = useState(' ');
	const [password, setPassword] = useState(' ');
	const [AdminSignIn, { token, error }] = useMutation(admin_sign_in);

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
			username2: username,
			password2: password
		});
		setToken(token);
	};
	async function loginUser(credentials) {
		const user = await AdminSignIn({
			// username: credentials?.username2.toString(),
			// password: credentials?.password2.toString()
			variables: { username: credentials?.username2, password: credentials?.password2 },
			result: {
				token,
				error
			}
		});
		// Currently returns a "positive" resolution to the async call, rather than undefined (i.e., always returns a token)
		return Promise.resolve(1);
	}
	function signUp() {
		//to-do: add nav stuff
	}

	return (
		<div className="holder">
			<div className="left-side">
				<img src={nappy} alt="NappyOnLine" className="img-nappy" />
			</div>
			<div className="login-inputs-wrapper">
				<h1 className="heading-text">EWB Administrator Portal Login</h1>
				<img src={logo} alt="Logo" />
				<form className="form" onSubmit={handleSubmit}>
					<label>
						<p className="header-text">Username</p>
						<input className="input" type="text" onChange={e => setUsername(e.target.value)} />
					</label>
					<label>
						<p className="header-text">Password</p>
						<input className="input" type="password" onChange={e => setPassword(e.target.value)} />
					</label>
					<div className="submit-button-div">
						<button type="submit" className="submit-button">
							Submit
						</button>
						<button onClick={signUp} className="signup-button">
							Sign Up
						</button>
					</div>
				</form>
				<p className="copyright-text"> © Mammalaef 2022</p>
			</div>
		</div>
	);
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired
};
