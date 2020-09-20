import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Login.scss';

import Topbar from '../../components/Topbar';
import useForm from '../../hooks';
import repository from '../../services/api/users.jsx';

function Login () {
	const history = useHistory();
	const [user, setUser] = useState([]);
	const [token, setToken] = useState('');

	const initValues = {
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
						repository.login({
						email: values.email,
						password: values.password,
					})
					.then((response) => {
						console.log(response)
						setUser(response.findedUser);
						setToken(response.token);
					})
					.then(() => {
						history.push('/');
					});
					
				} catch (error) {
					return error.message;
				}
				console.log(user);
					console.log(token);
			}}>
				<input
					type='email'
					name='email'
					placeholder='Email Address'
					value={values.email}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					value={values.password}
					onChange={handleChange}
					required
				/>

				<button type='submit'>
					Sign In
				</button>

			</form>
		</div>
	);
}

export default Login;