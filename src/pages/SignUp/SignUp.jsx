import React from 'react';

import './SignUp.scss';

import Topbar from '../../components/Topbar';
import useForm from '../../hooks';

function SignUp() {

	const initValues = {
		name: '',
		email: '',
		password: '',
	}

	const { values, handleChange } = useForm(initValues);

	function handleSubmit(event) {
		event.preventDefault();
	};

	return (
		<div className='container'>
			<Topbar/>
			<form className='signUp' onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					placeholder='User Name'
					value={values.name}
					onChange={handleChange}
					required
				/>
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
					Account Create
				</button>
			</form>	
		</div>
	);
};

export default SignUp;