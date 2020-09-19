import React from 'react';

import Topbar from '../../components/Topbar';
import './Login.scss';

function Login () {
	return (
		<div className='container'>
			<Topbar/>
			<form className='login'>
				<input
					type='email'
					placeholder='Email Address'
				/>
				<input
					type='password'
					placeholder='Password'
				/>

				<button>Sign In</button>

			</form>
		</div>
	);
}

export default Login;