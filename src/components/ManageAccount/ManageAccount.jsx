import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeManageAccount, updateUser, updateUserAuth } from '../../actions';

import './ManageAccount.scss';
import UserIcon from 	'../../assets/icons/Icon-User-2px.svg';
import CloseIcon from '../../assets/icons/cancel.svg';

import useForm from '../../hooks';

function ManageAccount() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.authorization.user);
	const token = useSelector(state => state.authorization.token);
	const userUpdated = useSelector(state => state.users.userUpdated);
	const { values, handleChange } = useForm(user);
	
	console.log(user)
	console.log(token)
	async function handleSubmit(event) {
		event.preventDefault();
		
		await dispatch(updateUser(token, user));

		if (userUpdated) {
			await dispatch(updateUserAuth(userUpdated));	
		}
		

	};
	return (
		<div className='container'>
			<div className='Account'>
			<nav className='Account_header'>
				<div className='Account_header--title'>
					<img src={UserIcon} alt='AddIcon'/>
					<span> Manage User Account</span>
				</div>
				<img 
					className='Account_header--close'
					src={CloseIcon} 
					alt='CloseIcon' 
					onClick={() => dispatch(closeManageAccount())}
				/>	
			</nav>
			<form className='Account_form' onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type='text'
					name='name'
					values={values.name}
					onChange={handleChange}
					required
				/>
				<label>E-mail</label>
				<input 
					type='email'
					name='email'
					values={values.email}
					onChange={handleChange}
					required
				/>
				<label>Password</label>
				<input 
					type='password'
					name='password'
					values={values.password}
					onChange={handleChange}
					required
				/>
				<button type='submit'>
					Send Changes!
				</button>
			</form>
			</div>
		</div>
	);
};

export default ManageAccount;