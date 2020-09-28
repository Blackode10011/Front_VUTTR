import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Login.scss';

import Topbar from '../../components/Topbar';
import useForm from '../../hooks';
import { userAuth } from '../../actions/users';


function Login () {
	const history = useHistory();
	const dispatch = useDispatch();
	const isLogged = useSelector(state => state.authorization.isLogged);

	const initValues = {
		email: '',
		password: '',
	}

	const { handleChange, values } = useForm(initValues);

	async function handleSubmit(event) {
		event.preventDefault();

		await dispatch(userAuth(values));
			
		if (isLogged) {
			history.push('/');
		}
	}

	return (
		<div className='container'>
			<Topbar/>
			<form className='login' onSubmit={handleSubmit}>
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