import React, { useState } from 'react';

import './Login.scss';

import Topbar from '../../components/Topbar';
import useForm from '../../hooks';
import repository from '../../services/api/users.jsx';

function Login () {
	const [user, setUser] = useState([]);
	const [token, setToken] = useState('');

	const initValues = {
		name: '',
		email: '',
		password: '',
	}

	const { handleChange, values } = useForm(initValues);

	return (
		<div className='container'>
			<Topbar/>
			<form className='login' onSubmit={function handleSubmit(event) {
				event.preventDefault();

				try {
					setUser = repository.login({
						email: values.email,
						password: values.password,
					})
					.then((response) => {
						setToken(response);
					});
				} catch (error) {
					return error.message;
				}
				
			}}>
				<input
					type='email'
					placeholder='Email Address'
					value={values.email}
					onChange={handleChange}
				/>
				<input
					type='password'
					placeholder='Password'
					value={values.password}
					onChange={handleChange}
				/>

				<button type='submit'>
					Sign In
				</button>

			</form>
		</div>
	);
}

export default Login;