import React from 'react';
import { useDispatch } from 'react-redux';
import { handleCloseSuccess } from '../../actions';

import './Successful.scss';

function Succesful({message}) {
	const dispatch = useDispatch();
	console.log(message)
	return (
		<div className='container'>
			<div className='Successful'>
				<nav className='Successful_header'>
					<div className='Successful_header--title'>
						<span> VUTTR</span>
					</div>
				</nav>
				<nav className='Successful_content'>
					<span>{message}!</span>
					<button 
						onClick={() => {dispatch(handleCloseSuccess())}}>
						Ok!
					</button>
				</nav>
			</div>
		</div>
	);
};

export default Succesful;