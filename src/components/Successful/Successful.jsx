import React from 'react';
import { useDispatch } from 'react-redux';
import { handleCloseSuccess } from '../../actions';

import './Successful.scss';
import AddIcon from '../../assets/icons/plus.svg';

function Succesful() {
	const dispatch = useDispatch();
	return (
		<div className='container'>
			<div className='Successful'>
				<nav className='Successful_header'>
					<div className='Successful_header--title'>
						<img src={AddIcon} alt='CloseIcon'/>
						<span> Add new tool</span>
					</div>
				</nav>
				<nav className='Successful_content'>
					<span>Tool successfully registered!</span>
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